import React from "react";
import LinkButton from "../Buttons/LinkButton";
import Link from "next/link";

const HeaderCard = ({ id }: any) => {
  return (
    <div className="flex justify-between place-items-center rounded-lg p-6 text-white bg-[#373F68] text-sm">
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
      <LinkButton
        text="Edit Feedback"
        color="#4661E6"
        url={`/suggestion/${id}/edit`}
      />
    </div>
  );
};

export default HeaderCard;
