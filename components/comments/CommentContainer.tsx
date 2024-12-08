"use client";
import React, { useEffect, useState } from "react";
import FeedbackCard from "../feedback/FeedbackCard";

import AddComment from "../forms/AddComment";
import Comments from "./Comments";
import GoBack from "../buttons/GoBack";
import LinkButton from "../buttons/LinkButton";
import { useSession } from "next-auth/react";

const CommentContainer = ({ feedback, suggestionID }: any) => {
  const [replyTo, setReplyTo] = useState({
    username: "",
    id: "",
  });

  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-between gap-4" id="top">
      <div className="flex place-items-center justify-between px-4 mt-4">
        <GoBack />
        {session?.user?.id == feedback?.owner && (
          <LinkButton
            text="Edit Feedback"
            color="#4661e6"
            url={`/suggestion/${feedback._id}/edit`}
          />
        )}
      </div>
      <div className="flex-1">
        <FeedbackCard {...feedback} />
      </div>
      <div className="flex-grow overflow-y-auto rounded-lg">
        <AddComment
          suggestionID={suggestionID}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
        />
        <div className="flex justify-center">
          <div className="block h-[1px] w-[80%] bg-[#647196] opacity-20 " />
        </div>
        <Comments
          user={session?.user}
          feedback={feedback}
          setReplyTo={setReplyTo}
        />
      </div>
    </div>
  );
};

export default CommentContainer;
