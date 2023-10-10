import React from "react";

import HR_image from "../../../public/resources/hr.svg";
import up_icon from "../../../public/resources/up_icon1.svg";
import candi_icon from "../../../public/resources/candi_icon.svg";
import tal_icon from "../../../public/resources/tal_icon.svg";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center px-auto lg:px-8 xl:px-32 2xl:pl-64 2xl:pr-48  overflow-y-auto ">
      <div className="flex flex-col gap-5 w-full px-4 pt-12 md:w-2/5 md:mt-4 lg:mt-16 xl:mt-32 2xl:mt-48 mt-2">
        <div className=" text-3xl md:text-4xl lg:text-6xl font-semibold text-sub leading-snug">
          Elevate The Search For Your
          <span className=" text-primary"> Next Career </span> Or
          <span className="text-primary"> Next Talent</span>
        </div>
        <div className="text-sub font-normal text-lg lg:text-xl">
          Welcome to CV Sorting, where we use advanced technology and artificial
          intelligence to improve the way you find and evaluate the candidates.
          Our platform is created with a single goal in mind: to assist you in
          making data-driven choices and building teams of best candidates that
          drive the growth of your company.
        </div>
        <div>
          <button className="bg-primary text-white hover:bg-secondary px-16 text-base py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full px-4  md:w-3/5 md:mt-20 ">
        <div className="flex flex-col top-8 md:top-16 md:px-8">
          <div className="flex  md:justify-center ">
            <div className="flex gap-4 md:gap-0 ">
              <Image src={candi_icon} alt={""} />
              <div>
                <div className="font-medium ">Candidates</div>
                <div className="font-normal text-sm">
                  We have a more than best candidates
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex gap-4 md:gap-0">
              <Image src={up_icon} alt={""} />
              <div>
                <div className="font-medium ">Upload your CV</div>
                <div className="font-normal text-sm">Find the best job</div>
              </div>
            </div>

            <div className="flex gap-4 md:gap-0">
              <Image src={tal_icon} alt={""} />
              <div>
                <div className="font-medium ">Find the best talent</div>
                <div className="font-normal text-sm">
                  Upload CV and get the best shortlisted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-8 md:top-0 w-full">
          <Image src={HR_image} alt={""} width={870} height={580} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
