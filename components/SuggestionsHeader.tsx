import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SelectOptions from "./Buttons/SelectOptions";

const SuggestionsHeader = ({
  option,
  setOption,
  showOptions,
  setSortbyOptions,
}: any) => {
  return (
    <div className="flex justify-between place-items-center rounded-lg p-4 text-white bg-[#373F68] text-sm">
      <div className="flex gap-8 ">
        <div className="flex gap-4 place-items-center">
          <Image
            src={"/images/suggestions/icon-suggestions.svg"}
            height={24}
            width={23}
            alt="icon-suggestions"
          />
          <span className="text-lg font-bold">6 Suggestions</span>
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
            // <div className="absolute w-[255px] left-0 top-[70px] rounded-lg bg-white shadow-lg overflow-hidden z-10  ">
            //   <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 ">
            //     <button
            //       className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
            //       onClick={() => {
            //         setOptions("Most Upvotes"), setSortbyOptions(false);
            //       }}
            //     >
            //       <span>Most Upvotes</span>
            //       {option === "Most Upvotes" && (
            //         <Image
            //           src={"/images/shared/icon-check.svg"}
            //           width={11.03}
            //           height={7.5}
            //           alt="icon-check"
            //         />
            //       )}
            //     </button>
            //     <button
            //       className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
            //       onClick={() => {
            //         setOptions("Least Upvotes"), setSortbyOptions(false);
            //       }}
            //     >
            //       <span>Least Upvotes</span>
            //       {option === "Least Upvotes" && (
            //         <Image
            //           src={"/images/shared/icon-check.svg"}
            //           width={11.03}
            //           height={7.5}
            //           alt="icon-check"
            //         />
            //       )}
            //     </button>
            //     <button
            //       className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
            //       onClick={() => {
            //         setOptions("Most Comments"), setSortbyOptions(false);
            //       }}
            //     >
            //       <span>Most Comments</span>
            //       {option === "Most Comments" && (
            //         <Image
            //           src={"/images/shared/icon-check.svg"}
            //           width={11.03}
            //           height={7.5}
            //           alt="icon-check"
            //         />
            //       )}
            //     </button>
            //     <button
            //       className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
            //       onClick={() => {
            //         setOptions("Least Comments"), setSortbyOptions(false);
            //       }}
            //     >
            //       <span>Least Comments</span>
            //       {option === "Least Comments" && (
            //         <Image
            //           src={"/images/shared/icon-check.svg"}
            //           width={11.03}
            //           height={7.5}
            //           alt="icon-check"
            //         />
            //       )}
            //     </button>
            //   </div>
            // </div>
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

export default SuggestionsHeader;
