/* eslint-disable @next/next/no-img-element */
import React from "react";
import JhonSmith from "../../../public/resources/Jhon.svg";
import Image from "next/image";
const ThoughtCard = () => {
  return (
    <div className="group group-hover:bg-white hover:border-slate-300 flex flex-col border-1 border-solid border-slate-200  p-4 gap-4 rounded  ">
      <div className="flex ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255, 170, 0, 1)"
            stroke=" none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255, 170, 0, 1)"
            stroke=" none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255, 170, 0, 1)"
            stroke=" none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255, 170, 0, 1)"
            stroke=" none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255, 170, 0, 1)"
            stroke=" none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
      <div className="font-normal text-textSub text-sm text-justify">
        “Lorem ipsum dolor sit amet consectetur. Id neque consequat eget
        ullamcorper. Vulputate diam integer commodo. Lorem ipsum dolor sit amet
        consectetur. Vulputate diam integer commodo. Lorem ipsum dolor sit amet
        consectetur Vulputate diam integer.”
      </div>
      <div className=" flex justify-between items-center ">
        <div className="flex gap-4">
          <div>
            <Image src={JhonSmith} alt={""} />
          </div>
          <div className="flex flex-col">
            <div className="font-medium text-black text-lg">John Smith</div>
            <div className="font-normal text-textSub text-sm">
              Bussiness Man
            </div>
          </div>
        </div>
        <div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#cbd5e1"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-primary"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5417 21.5007C12.5417 23.092 11.9271 24.6182 10.8331 25.7434C9.73916 26.8686 8.25543 27.5007 6.70833 27.5007C5.16124 27.5007 3.67751 26.8686 2.58354 25.7434C1.48958 24.6182 0.875 23.092 0.875 21.5007C0.875 18.1857 6.70833 0.500732 6.70833 0.500732H9.625L6.70833 15.5007C8.25543 15.5007 9.73916 16.1329 10.8331 17.2581C11.9271 18.3833 12.5417 19.9094 12.5417 21.5007ZM27.125 21.5007C27.125 23.092 26.5104 24.6182 25.4165 25.7434C24.3225 26.8686 22.8388 27.5007 21.2917 27.5007C19.7446 27.5007 18.2608 26.8686 17.1669 25.7434C16.0729 24.6182 15.4583 23.092 15.4583 21.5007C15.4583 18.1857 21.2917 0.500732 21.2917 0.500732H24.2083L21.2917 15.5007C22.8388 15.5007 24.3225 16.1329 25.4165 17.2581C26.5104 18.3833 27.125 19.9094 27.125 21.5007Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThoughtCard;
