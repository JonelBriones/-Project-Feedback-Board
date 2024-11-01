import Image from "next/image";
import React from "react";

const SelectOptions = ({ option, setOption, setSortbyOptions }: any) => {
  return (
    <div className="absolute w-[255px] left-0 top-[70px] rounded-lg bg-white shadow-lg overflow-hidden z-10  ">
      <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 ">
        <button
          className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
          onClick={() => {
            setOption("Most Upvotes"), setSortbyOptions(false);
          }}
        >
          <span>Most Upvotes</span>
          {option === "Most Upvotes" && (
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
            setOption("Least Upvotes"), setSortbyOptions(false);
          }}
        >
          <span>Least Upvotes</span>
          {option === "Least Upvotes" && (
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
            setOption("Most Comments"), setSortbyOptions(false);
          }}
        >
          <span>Most Comments</span>
          {option === "Most Comments" && (
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
            setOption("Least Comments"), setSortbyOptions(false);
          }}
        >
          <span>Least Comments</span>
          {option === "Least Comments" && (
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
  );
};

export default SelectOptions;
