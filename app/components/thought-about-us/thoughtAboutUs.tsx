import React from "react";
import ThoughtCard from "../thoughts/thoughtCard";

const ThoughtAboutUs = () => {
  return (
    <div className="flex flex-col items-center  gap-12 mb-32 mx-4 md:mx-64 md:px-4">
      <div className="felx w-full justify-center items-center text-center text-40 font-semibold text-black">
        <div>
          What Do <span className="text-primary"> Thought</span> And
          <span className="text-primary"> Say </span>
        </div>
        <div>
          people<span className="text-primary"> About</span> Us
        </div>
      </div>

      <div className="flex gap-4">
        <ThoughtCard />
        <ThoughtCard />
        <ThoughtCard />
        <ThoughtCard />
      </div>
    </div>
  );
};

export default ThoughtAboutUs;
