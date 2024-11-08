import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeedbackCard = ({
  _id,
  title,
  upvotes,
  comments,
  description,
  category,
  userID,
  upvote,
  hover,
}: any) => {
  return (
    <Link
      href={`/suggestion/${_id}`}
      className="flex justify-evenly bg-white rounded-lg p-4 py-8 hover:text-[#4661E6]"
    >
      <button
        className={`flex flex-col gap-2 place-items-center justify-center rounded-xl w-[40px] h-fit bg-[#f2f4fe] p-3 text-sm z-10 ${
          upvotes.includes(userID)
            ? "bg-[rgb(70,97,230)] text-white"
            : "text-[#3A4374] hover:bg-[#cfd7ff]"
        }`}
        onClick={() => upvote(_id)}
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
        <span className="font-bold">{upvotes.length}</span>
      </button>
      <div className="flex basis-3/4 flex-col gap-2">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-[#647196]">{description}</p>
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
        <span>{comments.length ? comments.length : "0"}</span>
      </div>
    </Link>
  );
};

export default FeedbackCard;
