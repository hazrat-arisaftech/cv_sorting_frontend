import React from "react";

import illustration1 from "../../../public/resources/Illustration1.svg";

import Image from "next/image";
const GetBestCandidates = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center  px-auto lg:px-8 xl:px-32 2xl:px-64 p-4 overflow-y-auto mt-64 mb-64">
      <div className="flex w-full">
        <Image src={illustration1} alt={""} className="w-full" />
      </div>

      <div className="flex flex-col gap-6 justify-between w-full self-start mt-10">
        <div className=" text-3xl md:text-4xl lg:text-4xl font-semibold text-black leading-snug">
          Get The
          <span className=" text-primary"> Best Candidates </span> And
          <span className="text-primary"> Job Source</span> From The
          <span className="text-primary"> CV-Sorting</span>
        </div>
        <div className="text-sub font-normal text-base ">
          Our goal at CV Sorting is to completely transform the hiring process.
          To assist you in finding the most qualified individuals, our platform
          applies technology and AI.We help companies in relying on data-driven
          decisions to make wise judgments.
        </div>
        <div>
          <div className="flex  items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#0074d9"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check-circle-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              In order to save you time and resources, we simplify the applicant
              evaluation procedure.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#0074d9"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check-circle-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              Our AI affirms fair as well as equitable applicant evaluation.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#0074d9"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check-circle-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              To assist you in making wise hiring decisions, we offer actionable
              data and insights.
            </div>
          </div>

          <div className="flex gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#0074d9"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check-circle-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              We support the expansion and achievement of your company by
              assisting you in hiring the top people.
            </div>
          </div>
        </div>
        <div>
          <button className="bg-primary text-white hover:bg-secondary px-16 text-base py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetBestCandidates;
