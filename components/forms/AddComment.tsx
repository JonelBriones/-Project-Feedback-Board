"use client";
import addCommentAction from "@/app/_actions/users/addCommentAction";
import redirectToSignIn from "@/app/_actions/users/redirectToSignIn";

import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";

const AddComment = ({ suggestionID, replyTo, setReplyTo }: any) => {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  const addComment = () => {
    if (!session?.user?.id) redirectToSignIn();
    addCommentAction(suggestionID, comment).then((res) => {
      setMessage(res?.message);
    });
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current && replyTo) {
      inputRef?.current.focus();
      inputRef?.current.setSelectionRange(replyTo.length, replyTo.length);
    }
  }, [replyTo]);

  return (
    <div className="p-8 bg-white rounded-lg">
      <form action={addComment} className="flex flex-col gap-4">
        <label htmlFor="comment" className="font-bold text-black">
          Add Comment
        </label>
        <div className="relative">
          <textarea
            ref={inputRef}
            name="content"
            id="content"
            className="w-full bg-[#f7f7fd] rounded-lg p-4"
            placeholder="Type your comment here"
            onChange={(e) => setComment(e.target.value)}
            defaultValue={replyTo ? replyTo : ""}
          ></textarea>
          <span className="absolute -bottom-4 left-0 text-sm text-[#647196]">
            {250 - comment.length} Characters left
          </span>
        </div>
        <div className="flex justify-between place-items-center">
          <span className=" text-[#647196]">{message}</span>

          <button
            type="submit"
            className="bg-[#ad1fea] p-4 px-8 rounded-xl font-bold text-white"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
