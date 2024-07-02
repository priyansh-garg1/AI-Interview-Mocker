"use client";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";
import { PrcingPlans } from "./pricing/page";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <Header />
        <MainSection />
        <Testimonials />
        <PrcingPlans />
        <Footer />
      </div>
    </>
  );
}

const MainSection = () => {
  return (
    <main className="container mx-auto flex-grow flex flex-col items-center p-4">
      <section className="text-center mt-8">
        <h2 className="text-3xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          Welcome to <p className="text-primary font-bold">Prep Buddy!</p>
        </h2>
        <p className="text-gray-700 mb-6 animate-fade-in-up delay-1">
          Our platform helps you practice mock interviews with the assistance of
          AI. <br /> You can also explore job opportunities to kickstart your
          career.
        </p>
        <div className="flex flex-col  md:flex-row justify-center items-center">
          <Link href={"dashboard"}>
            <Button className="bg-primary flex gap-3 text-white py-2 px-4 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105 animate-fade-in-up delay-2">
              Get Started for Mock Interview <ArrowUpRightFromSquare />
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-evenly w-full mt-12">
        <div className="md:w-1/3 bg-gray-200 p-4 shadow-md animate-fade-in-up">
          <img
            src={
              "https://media.istockphoto.com/id/1415930061/photo/men-at-interview.webp?b=1&s=170667a&w=0&k=20&c=3asxjarOHiH8szcMetvbl_mxmMLfZCPyaeQw-HapXOw="
            }
            alt="Mock Interview"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mt-4">
            AI-Powered Mock Interviews
          </h3>
          <p className="text-gray-700 mt-2">
            Get real-time feedback and improve your interview skills with our
            AI-powered mock interviews.
          </p>
        </div>
        <div className="md:w-1/3 shadow-md bg-gray-200 p-4 mt-8 md:mt-0 animate-fade-in-up delay-1">
          <img
            src={
              "https://media.istockphoto.com/id/536245001/photo/job-search-still-life-with-title-jobs.webp?b=1&s=170667a&w=0&k=20&c=Gxdw8aV0PvyRgSE1H1LCV45XqsuuVTp9ZtoZ1UTdfzI="
            }
            alt="Find Jobs"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mt-4">Find Your Dream Job</h3>
          <p className="text-gray-700 mt-2">
            Explore job opportunities and find the perfect fit for your career
            goals.
          </p>
        </div>
      </section>
    </main>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className="flex flex-wrap md:flex-nowrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">PrepBuddy</h2>
            <p className="mt-4">Sign up to our newsletter</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Type your email here..."
                className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:shadow-outline"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-12 ">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4 ">Products</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Case Examples
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-xl font-bold mb-4">Company</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
              <h2 className="w-full text-xl font-bold mb-4 mt-6">Questions?</h2>
              <p>
                For any inquiries contact us at{" "}
                <a
                  href="mailto:contact@prepbuddy.ai"
                  className="hover:underline"
                >
                  contact@prepbuddy.ai
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 PrepBuddy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const testimonials = [
  {
    quote:
      "I knew I needed to practice a full case but didn't have anyone to practice with. PrepBuddy was perfect because I could practice whenever I wanted and also get feedback and sample answers to help me improve.",
    name: "Mina",
    image:
      "https://media.istockphoto.com/id/2088874815/photo/black-and-white-business-button.webp?b=1&s=170667a&w=0&k=20&c=6AChvX_SyXUKkZA5qqOSb3KKLew1Ak5y8u-6w6bdEf0=",
  },
  {
    quote:
      "Using PrepBuddy was the best decision I made during my interview prep. The case studies were challenging and highly relevant, and the feedback from the AI was incredibly helpful to understand what to practice next.",
    name: "Alex",
    image:
      "https://media.istockphoto.com/id/2088874815/photo/black-and-white-business-button.webp?b=1&s=170667a&w=0&k=20&c=6AChvX_SyXUKkZA5qqOSb3KKLew1Ak5y8u-6w6bdEf0=",
  },
  {
    quote:
      "PrepBuddy's extensive range of cases was exactly what I needed. The variety of cases from market sizing to valuation for M&As, allowed me to experience different scenarios and broaden my skills. Now I feel ready for that interview",
    name: "Olivier",
    image:
      "https://media.istockphoto.com/id/2088874815/photo/black-and-white-business-button.webp?b=1&s=170667a&w=0&k=20&c=6AChvX_SyXUKkZA5qqOSb3KKLew1Ak5y8u-6w6bdEf0=",
  },
];

export const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl  leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <div className="flex justify-center gap-2">
              <h1 className=" text-center">Hear from our </h1>
              <h1 className="text-primary">Users</h1>
            </div>
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg bg-gray-200 "
              >
                <p className="text-base font-medium text-gray-500 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
