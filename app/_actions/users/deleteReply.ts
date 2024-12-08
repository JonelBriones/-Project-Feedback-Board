"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import redirectToSignIn from "./redirectToSignIn";

export const deleteReply = async (
  feedbackID: string,
  commentID: string,
  replyID: string
) => {
  await connectDB();

  const feedbackResult = await Feedback.findById(feedbackID);
  const sessionUser = await auth();

  console.log("FEEDBACK ID", feedbackID);

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }
  console.log("DELETE REPLY", feedbackResult);
  console.log(feedbackResult.comments);

  feedbackResult.comments.map((comment) =>
    comment._id == commentID
      ? {
          ...comment.replies.pull({ _id: replyID }),
        }
      : comment
  );
  await feedbackResult.save();

  revalidatePath("/", "layout");
};
