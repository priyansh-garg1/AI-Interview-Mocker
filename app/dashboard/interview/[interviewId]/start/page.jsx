'use client'
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSections from './_components/QuestionSections';

function StartInterview({params}) {
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

        const mockJsonResp = JSON.parse(result[0].jsonMockResp)
        console.log(mockJsonResp);
        setMockInterviewQuestion(mockJsonResp)
        setInterviewData(result[0]);
      };
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <QuestionSections activeQuestionIndex={activeQuestionIndex} mockInterviewQuestion={mockInterviewQuestion}/>
        </div>

    </div>
  )
}

export default StartInterview