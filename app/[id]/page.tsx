"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { currentUser as user } from "@/data/user.json";
import { productRequests as productdata } from "@/data/feedbacks.json";
import FeedbackCard from "@/components/cards/FeedbackCard";
import GoBack from "@/components/Buttons/GoBack";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<any>(
    productdata.find((feedback: any) => feedback.id == id)
  );

  function upvote() {
    const isUpvoted = feedback?.upvotes.includes(user._id);

    if (isUpvoted) {
      const removeUpvote = feedback?.upvotes.filter(
        (userID: number) => userID != user._id
      );
      setFeedback({ ...feedback, upvotes: removeUpvote });
    } else {
      setFeedback({ ...feedback, upvotes: [...feedback.upvotes, user._id] });
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-screen-md">
      <div className="flex justify-between place-items-center">
        <GoBack />
        <Link
          href={`/edit-feedback/${id}`}
          className="rounded-xl font-bold bg-[#7c91f9] text-white p-3 px-6"
        >
          Edit Feedback
        </Link>
      </div>

      {feedback && (
        <FeedbackCard
          key={feedback.id}
          {...feedback}
          userID={user._id}
          upvote={upvote}
        />
      )}

      <div className="bg-white p-8 rounded-xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">{feedback.comments.length} Comments</h1>
          <div className="flex gap-4">
            <Image
              src={"/images/user-images/image-elijah.jpg"}
              width={40}
              height={40}
              alt="image-elijah"
              priority
              className="rounded-full h-fit"
            />
            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between">
                <div className="text-md">
                  <h4 className="font-bold text-[#3a4374]">name</h4>
                  <p className="text-[#647196]">@username</p>
                </div>
                <button className="text-[#4661E6] font-semibold text-sm hover:underline">
                  Reply
                </button>
              </div>
              <p className="text-[#647196">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique odit incidunt qui commodi nemo aliquid, dolorem quis
                temporibus totam vel illo rerum. Autem mollitia illo, laborum
                quia et nemo modi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aperiam, voluptatem.
              </p>
              <div className="flex justify-between gap-4">
                <textarea
                  name=""
                  id=""
                  className="flex-grow rounded-md p-4 bg-[#f6f8fd]"
                />
                <button className=" font-bold text-white bg-[#ad1fea]  rounded-xl px-6 h-fit py-3">
                  Post Reply
                </button>
              </div>
            </div>
          </div>
          <div className="my-2 border-[1px] border-[#8c92b3] opacity-25" />
          {/* MAKE INTO REUSABLE COMPONENT */}
          <div className="flex gap-4">
            <Image
              src={"/images/user-images/image-elijah.jpg"}
              width={40}
              height={40}
              alt="image-elijah"
              priority
              className="rounded-full h-fit"
            />
            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between">
                <div className="text-md">
                  <h4 className="font-bold text-[#3a4374]">name</h4>
                  <p className="text-[#647196]">@username</p>
                </div>
                <button className="text-[#4661E6] font-semibold text-sm hover:underline">
                  Reply
                </button>
              </div>
              <p className="text-[#647196">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique odit incidunt qui commodi nemo aliquid, dolorem quis
                temporibus totam vel illo rerum. Autem mollitia illo, laborum
                quia et nemo modi! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aperiam, voluptatem.
              </p>
              <div className="flex justify-between gap-4">
                <textarea
                  name=""
                  id=""
                  className="flex-grow rounded-md p-4 bg-[#f6f8fd]"
                />
                <button className=" font-bold text-white bg-[#ad1fea]  rounded-xl px-6 h-fit py-3">
                  Post Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
