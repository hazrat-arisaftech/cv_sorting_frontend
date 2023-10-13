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
    <div className="pt-20  flex flex-col gap-20 mt-4 my-4 md:my-24 mx-4 md:mx-64   ">
      <div className=" flex justify-center font-semibold text-3xl md:text-5xl gap-2 relative">
        <span>How </span>
        <span className="text-primary"> CV-Sorting </span>
        <span> Works</span>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-7">
            <div className="group hover:bg-white hover:shadow-slate-400 hover:shadow-2xl flex flex-col items-center  gap-8 p-4">
              <div className="group-hover:bg-primary  bg-ash rounded-full flex justify-center w-20 h-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0074d9"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user-plus-2 self-center group-hover:stroke-white"
                >
                  <path d="M14 19a6 6 0 0 0-12 0" />
                  <circle cx="8" cy="9" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
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

            <div className="flex self-start scale-[1.3]">
              <Image className="" src={arrows} alt="" />
            </div>

            <div className="group hover:bg-white hover:shadow-slate-400 hover:shadow-2xl flex flex-col items-center gap-8  p-4">
              <div className="group-hover:bg-primary bg-ash rounded-full flex justify-center w-20 h-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0074d9"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-upload-cloud self-center group-hover:stroke-white"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
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
            <div className="flex self-start scale-[1.3] mt-10">
              <Image
                className=" mt-10 transform -scale-y-100"
                src={arrows}
                alt=""
              />
            </div>
            <div className="group hover:bg-white hover:shadow-slate-400 hover:shadow-2xl flex flex-col items-center gap-8 p-4">
              <div className="group-hover:bg-primary bg-ash  rounded-full flex justify-center w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0074d9"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-align-end-horizontal self-center group-hover:stroke-white  transform -scale-x-100"
                >
                  <rect width="6" height="16" x="4" y="2" rx="2" />
                  <rect width="6" height="9" x="14" y="9" rx="2" />
                  <path d="M22 22H2" />
                </svg>
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
            <div className="flex self-start scale-[1.3]">
              <Image className="" src={arrows} alt="" />
            </div>
            <div className="group hover:bg-white hover:shadow-slate-400 hover:shadow-2xl  flex flex-col items-center gap-8 p-4">
              <div className="group-hover:bg-primary bg-ash  rounded-full flex justify-center  w-20 h-20 ">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0074d9"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-users-2 self-center group-hover:stroke-white"
                >
                  <path d="M14 19a6 6 0 0 0-12 0" />
                  <circle cx="8" cy="9" r="4" />
                  <circle
                    cx="8"
                    cy="9"
                    r="4"
                    className="transform -scale-x-100"
                  />
                  <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
                </svg> */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke-width="1.75"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center group-hover:stroke-white "
                >
                  <path
                    d="M30.217 13.5514C30.1119 13.6302 29.9923 13.6875 29.8651 13.7201C29.7379 13.7527 29.6055 13.7599 29.4755 13.7413C29.3455 13.7227 29.2205 13.6787 29.1075 13.6118C28.9945 13.5449 28.8958 13.4564 28.817 13.3514C28.2142 12.5412 27.4297 11.8839 26.5265 11.4323C25.6233 10.9807 24.6267 10.7474 23.617 10.7514C23.4203 10.7513 23.228 10.6933 23.0642 10.5846C22.9003 10.4759 22.7722 10.3213 22.6957 10.1401C22.6438 10.0171 22.6171 9.8849 22.6171 9.75136C22.6171 9.61783 22.6438 9.48564 22.6957 9.36261C22.7722 9.18143 22.9003 9.02682 23.0642 8.9181C23.228 8.80938 23.4203 8.75138 23.617 8.75136C24.178 8.75131 24.7279 8.59391 25.204 8.29704C25.6801 8.00017 26.0634 7.57572 26.3104 7.07191C26.5574 6.56811 26.6581 6.00513 26.6012 5.44694C26.5443 4.88875 26.3319 4.35771 25.9883 3.91414C25.6447 3.47058 25.1836 3.13226 24.6573 2.93763C24.1311 2.743 23.5608 2.69986 23.0112 2.81309C22.4617 2.92633 21.9549 3.19141 21.5485 3.57823C21.142 3.96504 20.8522 4.45809 20.712 5.00136C20.6791 5.12858 20.6216 5.24809 20.5425 5.35306C20.4635 5.45803 20.3646 5.54641 20.2514 5.61315C20.1383 5.67989 20.0131 5.72369 19.883 5.74204C19.7529 5.76039 19.6204 5.75294 19.4932 5.72011C19.366 5.68728 19.2465 5.62972 19.1415 5.5507C19.0365 5.47168 18.9482 5.37277 18.8814 5.2596C18.8147 5.14642 18.7709 5.02121 18.7525 4.89112C18.7342 4.76102 18.7416 4.62858 18.7745 4.50136C18.9692 3.748 19.337 3.05048 19.8487 2.4643C20.3604 1.87812 21.0019 1.41945 21.722 1.1248C22.4422 0.830147 23.2212 0.70764 23.997 0.767026C24.7728 0.826411 25.5241 1.06605 26.191 1.46688C26.858 1.8677 27.4221 2.41865 27.8387 3.07589C28.2552 3.73312 28.5126 4.4785 28.5904 5.25271C28.6681 6.02692 28.5641 6.8086 28.2867 7.53555C28.0092 8.2625 27.5658 8.91465 26.992 9.44011C28.3517 10.0289 29.5338 10.9631 30.4207 12.1501C30.4995 12.2554 30.5567 12.3753 30.5891 12.5027C30.6215 12.6302 30.6285 12.7628 30.6096 12.893C30.5906 13.0232 30.5462 13.1483 30.4788 13.2613C30.4115 13.3743 30.3225 13.4728 30.217 13.5514ZM23.482 21.2514C23.5543 21.3652 23.6029 21.4925 23.6248 21.6255C23.6467 21.7586 23.6414 21.8948 23.6093 22.0257C23.5772 22.1567 23.519 22.2799 23.4381 22.3878C23.3572 22.4957 23.2553 22.5861 23.1385 22.6536C23.0217 22.7211 22.8925 22.7643 22.7586 22.7805C22.6247 22.7968 22.4889 22.7858 22.3594 22.7482C22.2299 22.7107 22.1093 22.6473 22.0049 22.5619C21.9005 22.4765 21.8145 22.3709 21.752 22.2514C21.122 21.1847 20.2249 20.3007 19.149 19.6866C18.0731 19.0725 16.8557 18.7495 15.617 18.7495C14.3782 18.7495 13.1608 19.0725 12.0849 19.6866C11.0091 20.3007 10.1119 21.1847 9.48196 22.2514C9.41944 22.3709 9.3334 22.4765 9.229 22.5619C9.12461 22.6473 9.00402 22.7107 8.87449 22.7482C8.74497 22.7858 8.60917 22.7968 8.47529 22.7805C8.3414 22.7643 8.21219 22.7211 8.09543 22.6536C7.97866 22.5861 7.87676 22.4957 7.79584 22.3878C7.71492 22.2799 7.65667 22.1567 7.62459 22.0257C7.5925 21.8948 7.58724 21.7586 7.60913 21.6255C7.63102 21.4925 7.6796 21.3652 7.75196 21.2514C8.72145 19.5856 10.1997 18.2747 11.9695 17.5114C10.9736 16.7489 10.2417 15.6936 9.87671 14.4936C9.51167 13.2937 9.53183 12.0096 9.93435 10.8217C10.3369 9.63388 11.1015 8.60203 12.1208 7.87121C13.1401 7.14039 14.3628 6.74736 15.617 6.74736C16.8712 6.74736 18.0938 7.14039 19.1131 7.87121C20.1324 8.60203 20.897 9.63388 21.2996 10.8217C21.7021 12.0096 21.7222 13.2937 21.3572 14.4936C20.9922 15.6936 20.2603 16.7489 19.2645 17.5114C21.0342 18.2747 22.5125 19.5856 23.482 21.2514ZM15.617 16.7514C16.4081 16.7514 17.1814 16.5168 17.8392 16.0772C18.497 15.6377 19.0097 15.013 19.3125 14.2821C19.6152 13.5512 19.6944 12.7469 19.5401 11.971C19.3858 11.1951 19.0048 10.4823 18.4454 9.92294C17.886 9.36353 17.1732 8.98256 16.3973 8.82822C15.6214 8.67388 14.8171 8.75309 14.0862 9.05584C13.3553 9.35859 12.7306 9.87129 12.2911 10.5291C11.8516 11.1869 11.617 11.9602 11.617 12.7514C11.617 13.8122 12.0384 14.8296 12.7885 15.5798C13.5387 16.3299 14.5561 16.7514 15.617 16.7514ZM8.61696 9.75136C8.61696 9.48615 8.5116 9.23179 8.32406 9.04426C8.13653 8.85672 7.88217 8.75136 7.61696 8.75136C7.05587 8.75131 6.50604 8.59391 6.02992 8.29704C5.5538 8.00017 5.17048 7.57572 4.9235 7.07191C4.67651 6.56811 4.57577 6.00513 4.6327 5.44694C4.68964 4.88875 4.90198 4.35771 5.24559 3.91414C5.58921 3.47058 6.05033 3.13226 6.57658 2.93763C7.10283 2.743 7.67312 2.69986 8.22266 2.81309C8.77221 2.92633 9.27898 3.19141 9.68543 3.57823C10.0919 3.96504 10.3817 4.45809 10.522 5.00136C10.5883 5.25829 10.7539 5.47836 10.9825 5.61315C11.211 5.74794 11.4838 5.78642 11.7407 5.72011C11.9976 5.65381 12.2177 5.48816 12.3525 5.2596C12.4873 5.03104 12.5258 4.75829 12.4595 4.50136C12.2648 3.748 11.8969 3.05048 11.3852 2.4643C10.8735 1.87812 10.2321 1.41945 9.5119 1.1248C8.79174 0.830147 8.01274 0.70764 7.2369 0.767026C6.46106 0.826411 5.70979 1.06605 5.04286 1.46688C4.37594 1.8677 3.81176 2.41865 3.39523 3.07589C2.9787 3.73312 2.72131 4.4785 2.64354 5.25271C2.56577 6.02692 2.66977 6.8086 2.94726 7.53555C3.22475 8.2625 3.66807 8.91465 4.24196 9.44011C2.88356 10.0294 1.70285 10.9636 0.816956 12.1501C0.657661 12.3623 0.589175 12.629 0.626565 12.8917C0.663955 13.1544 0.804158 13.3914 1.01633 13.5507C1.2285 13.71 1.49527 13.7785 1.75794 13.7411C2.0206 13.7037 2.25766 13.5635 2.41696 13.3514C3.01969 12.5412 3.80422 11.8839 4.7074 11.4323C5.61058 10.9807 6.60718 10.7474 7.61696 10.7514C7.88217 10.7514 8.13653 10.646 8.32406 10.4585C8.5116 10.2709 8.61696 10.0166 8.61696 9.75136Z"
                    fill="#0074D9"
                  />
                </svg>
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
