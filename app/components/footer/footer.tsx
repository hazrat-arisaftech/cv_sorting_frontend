import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/resources/CV-Sorting_logo.svg";
const Footer = () => {
  return (
    <footer className=" ">
      <div className=" flex flex-col md:flex-row justify-between p-4 py-12 md:px-64 gap-8 md:gap-36">
        <div className="flex flex-col gap-4 md:gap-6">
          <div>
            <Link
              href=""
              className="object-fill w-[139] h-[30] flex items-center "
            >
              <Image
                src={logo}
                alt={""}
                objectFit="fixed"
                width={139}
                height={30}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-textSub text-sm font-normal">
              Easily sort CVs and find skills using CV Sorting to speed up your
              hiring process.
            </div>
            <div className="flex flex-col">
              <div className="text-textSub text-base font-normal">Call US</div>
              <div className="text-primary text-lg font-normal">
                +880 1678 564 984
              </div>
            </div>
            <div className="text-textSub text-sm font-normal">
              youremail@gmail.com
            </div>
            <div className="text-textSub text-sm font-normal">
              Flat 4, 79 Chester Road, Exeter, EX96 1FY
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between  gap-4 md:gap-36 md:flex-row">
          <div className="flex flex-col  md:pr-0 gap-4 md:gap-6">
            <div className="text-black text-base font-medium">
              For Candidates
            </div>
            <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
              <div>Login/Register</div>
              <div>Upload CV</div>
              <div>CV Forward</div>
              <div>Candidates Dashboard</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-black text-base font-medium">
              For Employers
            </div>
            <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
              <div>Login/Register</div>
              <div>Upload Job Circular and Candidates CVs</div>
              <div>Upload Job Circular</div>
              <div>Shortlisted Best Candidates</div>
              <div>Employers Dashboard</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="text-black text-base font-medium">Preferance</div>
          <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
            <div>About US</div>
            <div>Contact Us</div>
            <div>Terms & Conditions</div>
            <div>Privacy & Policy</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 gap-4 md:px-64 border-solid border-t-1 border-slate-300">
        <div className="text-textSub text-sm font-normal">
          2023 © All rights reserved by CV Shorting.
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#ffffff"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook  bg-textSub rounded-full"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="rgba(52, 52, 52, 1)"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="-3 -3 30 30"
              fill="#ffffff"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin bg-textSub rounded "
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(52, 52, 52, 1)"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram  rounded "
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
