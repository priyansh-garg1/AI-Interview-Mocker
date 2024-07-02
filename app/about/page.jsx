import Image from "next/image";
import React from "react";
import { Footer } from "../page";
import Header from "../dashboard/_components/Header";

function page() {
  return (
    <>
    <Header />
      <div className="flex flex-col items-center bg-gray-100 p-4 md:flex-row md:justify-between md:p-8">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4 flex gap-3">About <div className="text-primary">PrepBuddy</div> </h1>
          <p className="text-lg mb-4">
            PrepBuddy is an AI-driven platform designed to help you practice
            mock interviews. Our advanced AI simulates real interview scenarios,
            allowing you to prepare effectively.
          </p>
          <p className="text-lg mb-4">
            Our mission is to make interview preparation accessible and
            effective for everyone. Whether you're a beginner or an experienced
            professional, PrepBuddy provides the tools and feedback you need to
            succeed.
          </p>
          <p className="text-lg">
            Join us today and take the next step in your career with confidence.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center p-4">
          <Image
            height={200}
            width={200}
            src="/i1.png"
            alt="Interview Practice"
            className="rounded-3xl w-full md:w-1/2 p-2"
          />
          <Image
            height={200}
            width={200}
            src="/i2.png"
            alt="AI Analysis"
            className="rounded-3xl w-full md:w-1/2 p-2"
          />
          <Image
            height={200}
            width={200}
            src="/i3.png"
            alt="Success Stories"
            className="rounded-3xl w-full md:w-1/2 p-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
