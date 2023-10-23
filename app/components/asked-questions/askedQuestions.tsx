/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useState } from "react";
const AskedQuestions = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const controlState = (selectedState: number) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);

    if (selectedState == 1) {
      setIsOpen1(!isOpen1);
    } else if (selectedState == 2) {
      setIsOpen2(!isOpen2);
    } else if (selectedState == 3) {
      setIsOpen3(!isOpen3);
    } else if (selectedState == 4) {
      setIsOpen4(!isOpen4);
    } else if (selectedState == 5) {
      setIsOpen5(!isOpen5);
    } else if (selectedState == 6) {
      setIsOpen6(!isOpen6);
    } else if (selectedState == 7) {
      setIsOpen7(!isOpen7);
    }
  };

  function selectedState(arg0: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col gap-12 py-32 mx-4 md:mx-64 md:px-4">
      <div className="felx justify-center items-center text-center text-40 font-semibold text-black ">
        <span>Frequently Asked</span>
        <span className="text-primary"> Questions</span>
      </div>
      <div className="flex flex-col  gap-4">
        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Can I upload my Cv without making an account?
              </div>
              <svg
                onClick={() => controlState(1)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen1 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen1 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Can I upload my updated CV at any time?
              </div>
              <svg
                onClick={() => controlState(2)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen2 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen2 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                What are the benefits of uploading a CV on this website?
              </div>
              <svg
                onClick={() => controlState(3)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen3 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen3 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Can I see my ranking in my account?
              </div>
              <svg
                onClick={() => controlState(4)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen4 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen4 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Can I see the companies whose requirements match with mine
                though I don't need that job?
              </div>
              <svg
                onClick={() => controlState(5)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen5 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen5 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Can I find other people's CVs from this website?
              </div>
              <svg
                onClick={() => controlState(6)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen6 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen6 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4 border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="question border-1 border-solid border-slate-300 rounded">
          <div className=" ">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
              <div className="text-lg font-normal text-black">
                Will I get notification in my account when my CV will be
                shortlisted?
              </div>
              <svg
                onClick={() => controlState(7)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(52, 52, 52, 1)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`lucide lucide-chevron-down ${
                  isOpen7 ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {isOpen7 && (
              <div className=" bg-white text-base text-textSub font-normal px-8 py-4  border-t-1 border-solid border-slate-300">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum. Elementum tincidunt a
                  et turpis amet turpis urna facilisi odio. Habitasse sed
                  phasellus facilisis posuere dui turpis ut vitae purus. Lorem
                  ipsum dolor sit amet consectetur. Tincidunt id aliquet
                  accumsan rhoncus tincidunt. Massa elit viverra donec
                  scelerisque volutpat vitae vestibulum elementum tincidunt a et
                  turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                  facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                  sit amet consectetur. Tincidunt id aliquet accumsan rhoncus
                  tincidunt. Massa elit viverra donec scelerisque volutpat vitae
                  vestibulum. Elementum tincidunt a et turpis amet turpis urna
                  facilisi odio. Habitasse sed phasellus facilisis posuere dui
                  turpis ut vitae purus. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
