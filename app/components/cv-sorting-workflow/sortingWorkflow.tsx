import React from "react";
import Image from "next/image";
// import user_plus from "../../../public/resources//candi_icon.svg";
import user_plus from "../../../public/resources/UserPlus.svg";
import cloud_arrow from "../../../public/resources/CloudArrowUp.svg";
import rank from "../../../public/resources/Rank.svg";
import user_three from "../../../public/resources/UsersThree.svg";
import arrows from "../../../public/resources/Arrows.svg";

const SortingWorkflow = () => {
  return (
    <div className="pt-20  flex flex-col gap-20 mt-4 my-4 md:my-20 mx-4 md:mx-64 md:mt-40 ">
      <div className=" flex justify-center font-semibold text-3xl md:text-5xl gap-2 relative">
        <span>How </span>
        <span className="text-primary"> CV-Sorting </span>
        <span> Works</span>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-7">
            <div className="flex flex-col items-center gap-8 hover:bg-gray-500">
              <div className="bg-ash rounded-full flex justify-center w-24 h-24 hover:bg-gray-400">
                <Image
                  className="flex items-center rounded-full"
                  src={user_plus}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium text-lg text-center">
                  Create Account
                </div>
                <div className="font-normal text-sm text-center">
                  Kickstart your CV journey by signing up with us.
                </div>
              </div>
            </div>

            <div className="flex self-start scale-[1.5]">
              <Image className="" src={arrows} alt="" />
            </div>

            <div className="flex flex-col items-center gap-8 relative hover:bg-gray-500">
              <div className="bg-ash rounded-full flex justify-center w-24 h-24">
                <Image
                  className="flex items-center rounded-full"
                  src={cloud_arrow}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium text-lg text-center">
                  Upload CVs & Circular
                </div>
                <div className="font-normal text-sm text-center">
                  Just Upload your circular with or without CVs and your job is
                  done.
                </div>
              </div>
            </div>
            <div className="flex self-start scale-[1.5]">
              <Image className="rotate-[180deg] mt-10" src={arrows} alt="" />
            </div>
            <div className="flex flex-col items-center gap-8 relative hover:bg-gray-500">
              <div className="bg-ash hover:bg-sky-500 rounded-full flex justify-center w-24 h-24">
                <Image
                  className="flex items-center rounded-full"
                  src={rank}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium  text-lg text-center">
                  Scoring & Ranking
                </div>
                <div className="font-normal text-sm text-center">
                  Evaluate candidates based on their knowledge base, and rank
                  them accordingly.
                </div>
              </div>
            </div>
            <div className="flex self-start scale-[1.5]">
              <Image className="" src={arrows} alt="" />
            </div>
            <div className="flex flex-col items-center gap-8 hover:bg-gray-500">
              <div className="bg-ash hover:bg-sky-500 rounded-full flex justify-center w-24 h-24">
                <Image
                  className="flex items-center rounded-full"
                  src={user_three}
                  alt={""}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium text-lg text-center">
                  Find Suitable Candidates
                </div>
                <div className="font-normal text-sm text-center">
                  Find the top candidates for the position that focuses on those
                  who are a good fit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingWorkflow;
