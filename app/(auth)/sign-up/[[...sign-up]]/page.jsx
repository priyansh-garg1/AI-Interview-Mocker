import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-500">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-300 p-8">
        <SignUp />
      </div>

      <div className="w-full md:w-1/2 relative">
        <img
          src="https://media.istockphoto.com/id/1464682653/photo/robot-talking-to-human.webp?b=1&s=170667a&w=0&k=20&c=51n_dumq7e_qexpCfMyitWx7nqzwLttZNMk8GUMJzKE="
          alt="AI Mock Interview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-100 bg-opacity-70 flex flex-col items-center justify-center text-black  p-8">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in-down ">
            Preparation Buddy!
          </h2>
          <p className="text-xl font-normal animate-fade-in-down delay-1 text-center">
            Practice mock interviews and find your dream job with Preparation
            Buddy.
          </p>
        </div>
      </div>
    </div>
  );
}