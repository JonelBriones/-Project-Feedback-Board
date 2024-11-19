"use client";
import Image from "next/image";
import React from "react";
import CommentCard from "./CommentCard";

const Comments = ({ feedback, setReplyTo }: any) => {
  console.log(feedback.comments);
  return (
    <div className="p-8 flex flex-col gap-4 bg-white rounded-lg">
      <h1>{feedback.comments.length} Comments</h1>
      {/* COMMENT CARD */}
      {feedback.comments.map((comment: any) => (
        <CommentCard
          setReplyTo={setReplyTo}
          key={comment._id}
          content={comment.content}
          username={comment.username}
          replyingTo={comment.replyingTo}
          replies={comment.replies}
          imageUrl={comment.imageUrl}
        />
      ))}
    </div>
  );
};

export default Comments;
