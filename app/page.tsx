/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HeroSection from "./components/hero-section/heroSection";
import SortNow from "./components/cv-sorting-workflow/sortNow";
import SortingWorkflow from "./components/cv-sorting-workflow/sortingWorkflow";
import GetBestCandidates from "./components/get-best-candidate/getBestCandidates";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SortingWorkflow />
      <SortNow />
      <GetBestCandidates />
    </div>
  );
};

export default Home;
