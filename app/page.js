'use client'
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <>
    <Header/>
    <div className="h-screen w-full flex flex-col gap-10 justify-evenly items-center bg-secondary">
      <h1 className="font-semibold text-5xl">Your Personal AI Interview Coach</h1>
      <Button className='flex gap-2' onClick={() => router.push("/dashboard")}>Get Started <ArrowRightIcon /></Button>
      <Button className='flex gap-2' onClick={() => router.push("/jobs")}>Find Jobs</Button>
    </div>
    </>
  );
}
