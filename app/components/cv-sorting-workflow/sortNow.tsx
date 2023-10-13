import React from "react";
import hr_image from "../../../public/resources/hr.svg";
import illustration2 from "../../../public/resources/Illustration2.svg";
import illustration1 from "../../../public/resources/Illustration1.svg";
import Image from "next/image";
import Link from "next/link";
const SortNow = () => {
  return (
    <div className="mx-4 md:mx-64 md:px-4 my-24   ">
      <div className="flex flex-col md:flex-row justify-between  gap-12 items-center  bg-white md:px-10    border-1 border-solid border-slate-300 shadow-xl rounded ">
        <div className="p-0 m-0">
          <Image className="self-center w-full" src={illustration1} alt={""} />
        </div>
        <div className="md:hidden block">
          <Image src={illustration2} alt={""} width={155} height={120} />
        </div>
        <div>
          <div className="font-semibold text-4xl text-black text-center md:text-start">
            CV SORTING
          </div>
          <div className="font-normal text-2xl text-textSub text-center md:text-start">
            With Circular and CVs Without CVs
          </div>
        </div>
        <div className="">
          <Link
            href=""
            className="block bg-primary px-24 py-3 md:px-8  font-medium text-base text-white rounded hover:bg-secondary transition duration-300"
          >
            CV Sorting Now
          </Link>
        </div>

        <div>
          <div className="hidden md:block ">
            <Image src={illustration2} alt={""} width={155} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortNow;
