import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionSections({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
    else{
      alert("Sorry, Your browser does not support text to speech");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => {
              return (
                <h2
                  className={`p-2  rounded-full text-xs  md:text-sm text-center cursor-pointer ${
                    activeQuestionIndex == index && "bg-blue-500 text-white"
                  } border border-secondary`}
                >
                  Question #{index + 1}
                </h2>
              );
            })}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 md:mt-20 mt-10">
          <h2 className="flex gap-2 items-center text-blue-500">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-blue-500 my-2">
            Click on Record Answer when you want to answer the queestion. At the
            end of interview we will give you the feedback along with correct
            answer for each of question and your answer to compare it
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSections;
