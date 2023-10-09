/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import styles from "@/app/components/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/resources/CV-Sorting_logo.svg";
import { Jost, Poppins } from "next/font/google";
// const Nav = () => {
//   return (
//     <div className=" w-full bg-white flex justify-between  items-center px-4 xl:96 lg:px-64 md:px-32 sm:px-16 py-3 shadow-lg">
//       <div className="">
//         {/* <div className="text-4xl font-semibold">CV-sorting </div>{" "} */}
//         <Link href="" className="object-fill w-[139] h-[30] ">
//           <Image
//             src={logo}
//             alt={""}
//             objectFit="fixed"
//             width={139}
//             height={30}
//           />
//         </Link>
//       </div>

//       <div className="flex justify-between  gap-10 collapse sm:collapse lg:visible ">
//         <Link href="" className=" text-lg font-normal ">
//           Home
//         </Link>
//         <Link href="" className="text-lg font-normal">
//           FAQ's
//         </Link>
//         <Link href="" className="text-lg font-normal">
//           Contact Us
//         </Link>
//       </div>
//       <div className="flex justify-between items-center gap-10 grid-rows-2 collapse  lg:visible xl:visible">
//         <div className="flex justify-center items-center gap-2  px-4 py-2 rounded-md">
//           <div
//             className="text-lg font-font-medium"
//             style={{ color: "rgba(0, 116, 217, 1)" }}
//           >
//             Upload CVs
//           </div>

//           <svg
//             fill="none"
//             stroke="currentColor"
//             color="rgba(0, 116, 217, 1)"
//             width={18}
//             stroke-width="1.5"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
//             ></path>
//           </svg>
//         </div>
//         <div className="login-btn px-4 py-2 rounded-md">Login / Register</div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0">
      <div className="max-w-8xl xl:mx-auto px-4 lg:px-10 xl:px-32 2xl:px-8">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link
                href=""
                className="object-fill w-[139] h-[30] flex items-center py-4 px-2"
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
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href=""
              className="py-4 px-2  border-b-4 hover:text-blue-500 border-blue-500 text-lg font-normal"
            >
              Home
            </Link>
            <Link
              href=""
              className="py-4 px-2 text-lg font-normal hover:text-blue-500 transition duration-300"
            >
              FAQ's
            </Link>

            <Link
              href=""
              className="py-4 px-2 text-lg font-normal hover:text-blue-500 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href=""
              className="flex gap-2 py-2 px-2 font-medium text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <div className="visible">Upload CV</div>

              <svg
                fill="none"
                stroke="currentColor"
                color="rgba(0, 116, 217, 1)"
                width={18}
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                ></path>
              </svg>
            </Link>
            <Link
              href=""
              className="block login-btn py-2 px-4 font-medium text-white rounded hover:bg-blue-500 transition duration-300"
            >
              Login / Register
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className={`w-6 h-6 text-gray-500 ${
                  isMobileMenuOpen ? "hover:text-green-500" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden mobile-menu ${isMobileMenuOpen ? "" : "hidden"}`}
      >
        <ul>
          <li className="active">
            <Link
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              FAQ's
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="block login-btn py-2 px-4 font-medium mr-80 text-white rounded hover:bg-blue-500 transition duration-300"
            >
              Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
