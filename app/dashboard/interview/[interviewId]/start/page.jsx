"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionSections from "./_components/QuestionSections";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const mockJsonResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(mockJsonResp);
    setInterviewData(result[0]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        <QuestionSections
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
        />
        <RecordAnswerSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6 mb-10">
      {activeQuestionIndex >0 &&  <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button> }
        {activeQuestionIndex!=mockInterviewQuestion?.length-1&&<Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
        <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
        {activeQuestionIndex==mockInterviewQuestion?.length-1&&<Button>End Interview</Button>}
        </Link>
      </div>
    </div>
  );
}

export default StartInterview;
