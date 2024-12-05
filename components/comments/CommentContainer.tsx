"use client";
import React, { useEffect, useState } from "react";
import FeedbackCard from "../feedback/FeedbackCard";

import AddComment from "../forms/AddComment";
import Comments from "./Comments";

const CommentContainer = ({ feedback, suggestionID }: any) => {
  const [replyTo, setReplyTo] = useState({
    username: "",
    id: "",
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
    const scrollToTop = document.getElementById("top");
    scrollToTop?.scrollIntoView({ behavior: "smooth" });
  }, [replyTo]);

  return (
    <div className="grid md:flex flex-col gap-4 md:overflow-hidden" id="top">
      <FeedbackCard {...feedback} />
      <div className="overflow-y-auto h-[calc(80vh-100px)] rounded-lg">
        <AddComment
          suggestionID={suggestionID}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
        />
        <Comments feedback={feedback} setReplyTo={setReplyTo} />
      </div>
    </div>
  );
};

export default CommentContainer;
