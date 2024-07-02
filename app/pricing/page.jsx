import React from "react";
import Header from "../dashboard/_components/Header";
import { Footer } from "../page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  return (
    <div>
      <Header />
      <PrcingPlans />
      <Footer />
    </div>
  );
}

export const PrcingPlans = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for you and start preparing for your
            interviews with PrepBuddy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 md:mb-0 md:w-1/3">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Free Plan</h3>
              <p className="mt-4 text-gray-600">Perfect for getting started</p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900">Free</p>
              <ul className="mt-6 space-y-4 text-gray-600 text-left">
                <li>✓ Access to basic interview questions</li>
                <li>✓ Limited AI feedback</li>
                <li>✓ Access to community forum</li>
                <li>✓ Email support</li>
              </ul>
              <Link href={"/"}>
                <Button className="mt-8  w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-1/3">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Premium Plan
              </h3>
              <p className="mt-4 text-gray-600">For those who want the best</p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900">
                $10<span className="text-xl text-gray-600">/month</span>
              </p>
              <ul className="mt-6 space-y-4 text-gray-600 text-left">
                <li>✓ Access to all interview questions</li>
                <li>✓ Detailed AI feedback</li>
                <li>✓ One-on-one coaching sessions</li>
                <li>✓ Priority email support</li>
                <li>✓ Access to exclusive webinars</li>
              </ul>
              <Link href={"/"}>
                <Button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Get Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
