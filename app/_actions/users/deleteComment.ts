"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import redirectToSignIn from "./redirectToSignIn";

export const deleteComment = async (feedbackID: any, commentID: string) => {
  await connectDB();

  const feedbackResult = await Feedback.findById(feedbackID);
  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }

  feedbackResult.comments.pull({ _id: commentID });
  await feedbackResult.save();

  revalidatePath("/", "layout");
};
