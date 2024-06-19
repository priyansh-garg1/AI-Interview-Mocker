import { Lightbulb } from "lucide-react";
import React from "react";

function QuestionSections({ mockInterviewQuestion, activeQuestionIndex }) {
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => {
              return (
                <h2
                  className={`p-2  rounded-full text-xs  md:text-sm text-center cursor-pointer ${
                    activeQuestionIndex == index && "bg-primary text-white"
                  } border border-secondary`}
                >
                  Question #{index + 1}
                </h2>
              );
            })}
        </div>
        <h2 className="my-5 text-md md:text-lg">{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <div className="border rounded-lg p-5 bg-blue-100">
            <h2 className="flex gap-2 items-center text-primary">
                <Lightbulb />
                <strong>Note: </strong>
            </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSections;
