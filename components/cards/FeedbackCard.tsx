import Image from "next/image";
import React from "react";

const FeedbackCard = ({
  id,
  header,
  upvotes,
  comments,
  detail,
  category,
  // isLiked,
  userID,
  upvote,
}: any) => {
  // IF USER UPVOTES SUGGESTION, ADD ID TO LIST OF UPVOTES BY USER

  return (
    <div className="flex justify-evenly bg-white rounded-lg p-4 py-8">
      <button
        className={`flex flex-col gap-2 place-items-center justify-center rounded-lg w-[40px] h-[53px] bg-[#f2f4fe] ${
          upvotes.includes(userID)
            ? "bg-[rgb(70,97,230)] text-white"
            : "text-[#3A4374] hover:bg-[#cfd7ff]"
        }`}
        onClick={() => upvote(id)}
      >
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6l4-4 4 4"
            stroke={upvotes.includes(userID) ? "#fff" : "#4661e6"}
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        {/* <Image
          src={"/images/shared/icon-arrow-up.svg"}
          width={8}
          height={4}
          alt="icon-arrow-up"
        /> */}
        <span className="font-bold">{upvotes.length}</span>
      </button>
      <div className="flex basis-3/4 flex-col gap-2">
        <h4 className="font-bold text-lg">{header}</h4>
        <p className="text-[#647196]">{detail}</p>
        <span className="w-fit inline-block py-2 px-4 rounded-lg bg-[#F2F4FF] text-[#4661E6] font-semibold">
          {category}
        </span>
      </div>
      <div className="flex gap-4 place-items-center">
        <Image
          src={"/images/shared/icon-comments.svg"}
          width={18}
          height={16}
          alt="icon-comment"
        />
        <span>{comments.length}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
