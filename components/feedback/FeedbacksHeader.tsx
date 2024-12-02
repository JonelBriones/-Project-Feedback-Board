import Image from "next/image";
import Link from "next/link";
import React from "react";
import SelectOptions from "../buttons/SelectOptions";

const FeedbacksHeader = ({
  option,
  setOption,
  showOptions,
  setSortbyOptions,
  feedbacks,
}: any) => {
  return (
    <div className="flex justify-between place-items-center md:rounded-lg p-4 text-white bg-[#373F68] text-sm">
      <div className="flex gap-8 ">
        <div className="hidden lg:flex gap-4 place-items-center">
          <Image
            src={"/images/suggestions/icon-suggestions.svg"}
            height={24}
            width={23}
            alt="icon-suggestions"
          />
          <span className="text-lg font-bold">
            {feedbacks.length} Suggestions
          </span>
        </div>
        <div className="flex place-items-center relative">
          <button
            onClick={() => setSortbyOptions(!showOptions)}
            className="text-[#f2f4fe] flex gap-2 place-items-center"
          >
            Sort by : <span className="font-bold">{option}</span>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d={showOptions ? "M1 6l4-4 4 4" : "M1 1l4 4 4-4"}
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          {showOptions && (
            <SelectOptions
              option={option}
              setOption={setOption}
              setSortbyOptions={setSortbyOptions}
            />
          )}
        </div>
      </div>
      <Link
        href={"/create-feedback"}
        className="px-6 py-4 bg-[#ad1fea] rounded-lg hover:bg-[#c75af6]"
      >
        + Add Feedback
      </Link>
    </div>
  );
};

export default FeedbacksHeader;
