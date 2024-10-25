import Image from "next/image";
import React from "react";

const FeedbackCard = ({ header, upvotes, comments, detail, category }: any) => {
  return (
    <div className="flex justify-evenly bg-white rounded-lg p-4 py-8">
      <div className="flex flex-col gap-2 place-items-center justify-center rounded-lg w-[40px] h-[53px] bg-[#f2f4fe]">
        <Image
          src={"/images/shared/icon-arrow-up.svg"}
          width={8}
          height={4}
          alt="icon-arrow-up"
        />
        <span className="font-bold text-[#3A4374]">{upvotes}</span>
      </div>
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
