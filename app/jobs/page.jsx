"use client";
import React, { useState } from "react";
import { Footer } from "../page";
import Header from "../dashboard/_components/Header";
import { chatSession } from "@/utils/GeminiAIModal";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

function page() {
  return (
    <>
      <Header />
      <JobPage />
      <Footer />
    </>
  );
}

const jobs = [
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Frontend Developer",
    description: "Develop and maintain the front-end of web applications.",
    technology: "React, Tailwind CSS",
    paid: true,
    yoe: 2,
    location: "New York, NY",
  },
  {
    role: "Backend Developer",
    description: "Work on server-side logic and database management.",
    technology: "Node.js, Express",
    paid: true,
    yoe: 3,
    location: "San Francisco, CA",
  },
  {
    role: "Intern Developer",
    description: "Assist in developing and testing web applications.",
    technology: "HTML, CSS, JavaScript",
    paid: false,
    yoe: 0,
    location: "Remote",
  },
];

const JobPage = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([])
  const [formData, setFormData] = useState({
    role: "",
    location: "",
    technology: "",
    yoe: "",
  });

  useEffect(() => {
    handleSubmit();

  }, [])
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const InputPrompt = "Find 20 Newest Job for user the ";
    const result = await chatSession.sendMessage(InputPrompt);
    const JobsJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JobsJsonResp);
    console.log(JSON.parse(JobsJsonResp));
    setJobs(JSON.parse(JobsJsonResp))
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 md:px-32 rounded-lg p-4 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Job Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter job role"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Years of Experience</label>
            <input
              type="number"
              name="yoe"
              value={formData.yoe}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter years of experience"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter location"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Technology</label>
            <input
              type="text"
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter technology"
              required
            />
          </div>
        </div>
        <div className="flex gap-5 justify-end">
          <Button type="submit" disabled={loading}>
            {" "}
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" /> Finding...
              </>
            ) : (
              "Find"
            )}
          </Button>
        </div>
      </form>
      <div className="mt-4 h-96 overflow-y-auto">
        {jobs && <div className="flex flex-wrap justify-center">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>}
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <div className="bg-slate-200 shadow-md rounded-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
      <h2 className="text-xl font-bold mb-2">{job.role}</h2>
      <p className="text-gray-700 mb-2">{job.description}</p>
      <p className="text-gray-700 mb-2">
        <strong>Technology:</strong> {job.technology}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Experience:</strong> {job.yoe} years
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Status:</strong> {job.paid ? "Paid" : "Unpaid"}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Apply
      </button>
    </div>
  );
};

export default page;
