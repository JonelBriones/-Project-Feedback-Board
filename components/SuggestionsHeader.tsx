import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuggestionsHeader = ({
  setSortbyOptions,
  showSortbyOptions,
  sortby,
  setSortby,
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
            onClick={() => setSortbyOptions(!showSortbyOptions)}
            className="text-[#f2f4fe] flex gap-2 place-items-center"
          >
            Sort by : <span className="font-bold">{sortby}</span>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d={showSortbyOptions ? "M1 6l4-4 4 4" : "M1 1l4 4 4-4"}
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          {showSortbyOptions && (
            <div className="absolute w-[255px] left-0 top-[70px] rounded-lg bg-white shadow-lg overflow-hidden z-10  ">
              <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 ">
                <button
                  className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                  onClick={() => {
                    setSortby("Most Upvotes"), setSortbyOptions(false);
                  }}
                >
                  <span>Most Upvotes</span>
                  {sortby === "Most Upvotes" && (
                    <Image
                      src={"/images/shared/icon-check.svg"}
                      width={11.03}
                      height={7.5}
                      alt="icon-check"
                    />
                  )}
                </button>
                <button
                  className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                  onClick={() => {
                    setSortby("Least Upvotes"), setSortbyOptions(false);
                  }}
                >
                  <span>Least Upvotes</span>
                  {sortby === "Least Upvotes" && (
                    <Image
                      src={"/images/shared/icon-check.svg"}
                      width={11.03}
                      height={7.5}
                      alt="icon-check"
                    />
                  )}
                </button>
                <button
                  className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                  onClick={() => {
                    setSortby("Most Comments"), setSortbyOptions(false);
                  }}
                >
                  <span>Most Comments</span>
                  {sortby === "Most Comments" && (
                    <Image
                      src={"/images/shared/icon-check.svg"}
                      width={11.03}
                      height={7.5}
                      alt="icon-check"
                    />
                  )}
                </button>
                <button
                  className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                  onClick={() => {
                    setSortby("Least Comments"), setSortbyOptions(false);
                  }}
                >
                  <span>Least Comments</span>
                  {sortby === "Least Comments" && (
                    <Image
                      src={"/images/shared/icon-check.svg"}
                      width={11.03}
                      height={7.5}
                      alt="icon-check"
                    />
                  )}
                </button>
              </div>
            </div>
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
