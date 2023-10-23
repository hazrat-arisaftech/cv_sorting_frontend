/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HeroSection from "./components/hero-section/heroSection";
import SortNow from "./components/cv-sorting-workflow/sortNow";
import SortingWorkflow from "./components/cv-sorting-workflow/sortingWorkflow";
import GetBestCandidates from "./components/get-best-candidate/getBestCandidates";
import AskedQuestions from "./components/asked-questions/askedQuestions";
import ThoughtAboutUs from "./components/thought-about-us/thoughtAboutUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SortingWorkflow />
      <SortNow />
      <GetBestCandidates />
      <ThoughtAboutUs />
      <AskedQuestions />
    </div>
  );
}

export const dynamic = "force-dynamic";
