"use client";
import Link from "next/link";
import React, { useState } from "react";
import RoadmapSuggestionCard from "./RoadmapSuggestionCard";
import RoadmapSuggestionCardList from "./RoadmapSuggestionCardList";
import { Feedback } from "@/types";

const Roadmap = ({ feedbacksAPI }: any) => {
  const [toggleStatusView, setToggleStatusView] = useState("In-progress");

  const status: any = {
    Planned: "Ideas prioritized for research",
    "In-progress": "Currently being developed",
    Live: "Released features",
  };

  function renderStatus(status: string, description: string, color: string) {
    let statusLength = feedbacksAPI.filter(
      (feedback: Feedback) => feedback.status == status.toLowerCase()
    );
    return (
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="font-bold text-lg">
            {status} ({statusLength.length})
          </h4>
          <p className="text-[#647196]">{description}</p>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <RoadmapSuggestionCardList feedbacks={feedbacksAPI} status={status} />
        </div>
      </div>
    );
  }
  function getStatusLength(status: string) {
    let arr = feedbacksAPI.filter(
      (feedback: Feedback) => status.toLowerCase() == feedback.status
    );
    return arr.length;
  }
  function renderMobileHeader() {
    let statusPlanned = feedbacksAPI.filter(
      (feedback: Feedback) => "planned" == feedback.status
    );
    let statusInProgress = feedbacksAPI.filter(
      (feedback: Feedback) => "in-progress" == feedback.status
    );
    let statusLive = feedbacksAPI.filter(
      (feedback: Feedback) => "live" == feedback.status
    );

    return (
      <div className="border-b border-black flex-1 flex justify-evenly">
        <button
          onClick={() => setToggleStatusView("Planned")}
          className={`w-full pb-4 border-b-4 border-[#ad1fea] ${
            "Planned" == toggleStatusView ? "" : "border-opacity-0"
          }`}
        >
          {"Planned"} ({statusPlanned.length})
        </button>
        <button
          onClick={() => setToggleStatusView("In-progress")}
          className={`w-full pb-4 border-b-4 border-[#ad1fea] ${
            "In-progress" == toggleStatusView ? "" : "border-opacity-0"
          }`}
        >
          {"In-Progress"} ({statusInProgress.length})
        </button>
        <button
          onClick={() => setToggleStatusView("Live")}
          className={`w-full pb-4 border-b-4 border-[#ad1fea] ${
            "Live" == toggleStatusView ? "" : "border-opacity-0"
          }`}
        >
          {"Live"} ({statusLive.length})
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between place-items-center rounded-lg p-6 text-white bg-[#373F68] text-sm ">
        <div className="flex flex-col gap-2">
          <Link href={"/"} className="flex place-items-center gap-4">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L2 5l4-4"
                stroke="#cdd2ee"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            <h2 className="font-bold text-sm hover:underline">Go Back</h2>
          </Link>
          <h1 className="font-bold text-2xl">Roadmap</h1>
        </div>
        <Link
          href={"/create-feedback"}
          className="px-6 py-4 bg-[#ad1fea] rounded-lg hover:bg-[#c75af6]"
        >
          + Add Feedback
        </Link>
      </div>
      <div className="md:hidden flex flex-col h-[80vh]">
        <div className="flex flex-col gap-8">{renderMobileHeader()}</div>
        <div className="p-8 overflow-y-auto ">
          <div>
            <h4 className="font-bold text-lg">
              {toggleStatusView} ({getStatusLength(toggleStatusView)})
            </h4>
            <p className="text-[#647196]">{status[toggleStatusView]}</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              {feedbacksAPI.map(
                (feedback: any) =>
                  feedback.status.toLowerCase() ==
                    toggleStatusView.toLowerCase() && (
                    <RoadmapSuggestionCard
                      key={feedback._id}
                      {...feedback}
                      status={status}
                      color={"#ad1fea"}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-4 h-[80vh]">
        {renderStatus("Planned", "Ideas prioritized for research", "f49f85")}
        {renderStatus("In-progress", "Currently being developed", "ad1fea")}
        {renderStatus("Live", "Released features", "62bcfa")}
      </div>
    </div>
  );
};

export default Roadmap;
