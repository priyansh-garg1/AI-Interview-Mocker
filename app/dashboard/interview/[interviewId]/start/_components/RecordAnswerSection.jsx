"use client";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { Mic, StopCircle } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

function RecordAnswerSection({
  activeQuestionIndex,
  mockInterviewQuestion,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if(!isRecording && userAnswer.length>10){
      UpdateUserAnswerInDb()
    }
  }, [userAnswer])
  

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswerInDb = async () => {
    setLoading(true);
    console.log(userAnswer);
    const feedBackPrompt =
      "Question:" +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ", User Answer:" +
      userAnswer +
      ",Depends on question and user answer for given interview question " +
      " please give us rating for answer and feedback as area of improvement if any" +
      " in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

    const result = await chatSession.sendMessage(feedBackPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(MockJsonResp);
    const JsonFeedbackResp = JSON.parse(MockJsonResp);

    const resp = await db.insert(UserAnswer).values({
      mockId: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });
    if (resp) {
      toast("User answer recorded successfully");
      setResults([])
      setUserAnswer("");
    }
    setResults([])
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col md:mt-20  justify-center items-center bg-black rounded-lg p-5">
        <Image
          className="absolute"
          src={"/webcam.svg"}
          width={200}
          height={200}
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="mt-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <>
            <Mic />
            Record Answer
          </>
        )}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
