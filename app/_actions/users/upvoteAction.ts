"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import { error } from "console";
import redirectToSignIn from "./redirectToSignIn";
const upvoteAction = async (suggestionID: string) => {
  await connectDB();

  const suggestion = await Feedback.findById(suggestionID);
  const sessionUser = await auth();
  const currentUserID = sessionUser?.user?.id;

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }
  const user = await User.findById(sessionUser?.user?.id);

  let error;
  let upvoteCount;

  let isLiked = user.upvotes.includes(suggestion._id);
  if (!isLiked) {
    suggestion.upvotes.push(currentUserID);

    isLiked = true;
    user.upvotes.push(suggestionID);
  } else {
    isLiked = false;
    suggestion.upvotes.pull(currentUserID);
    user.upvotes.pull(suggestionID);
  }

  await suggestion.save();
  await user.save();

  upvoteCount = suggestion.upvotes.length;

  revalidatePath("/", "layout");

  return {
    error,
    upvoteCount,
    isLiked,
  };
};
export default upvoteAction;
