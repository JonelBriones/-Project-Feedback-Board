"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import getSessionUser from "@/utils/getSessionUser";
const upvoteAction = async (suggestionID: string) => {
  await connectDB();

  // const session = await auth();

  // const sessionUser = await getSessionUser();
  const session = await auth();

  console.log("SESSION AUTH", session);

  const suggestion = await Feedback.findById(suggestionID);

  const currentUserID = session?.user?.id;
  if (!suggestion) {
    throw new Error("Suggestion does not exist");
  }
  const user = await User.findById(session?.user?.id);

  let message;
  let isLiked = suggestion.upvotes.includes(currentUserID);
  if (!isLiked) {
    console.log("upvote");
    suggestion.upvotes.push(currentUserID);
    isLiked = true;
    user.upvotes.push(suggestionID);
  } else {
    console.log("remove upvote");
    isLiked = false;
    suggestion.upvotes.pull(currentUserID);
    user.upvotes.pull(suggestionID);
  }
  console.log("USER", user);
  await suggestion.save();
  await user.save();

  revalidatePath("/", "layout");

  return {
    message,
    isLiked,
  };
};
export default upvoteAction;
