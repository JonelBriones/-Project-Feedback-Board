"use server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import User from "@/models/User";

const upvoteAction = async (suggestionID: string) => {
  await connectDB();

  const session = await auth();

  const user = await User.findById(session?.user?.id);
  const suggestion = await Feedback.findById(suggestionID);
  const currentUserID = session?.user?.id;
  if (!suggestion) {
    throw new Error("Suggestion does not exist");
  }

  console.log("SUGGESTION", suggestion);
  console.log("CURRENTUSERID", currentUserID);

  let message;
  let isLiked = suggestion.upvotes.includes(currentUserID);

  if (!isLiked) {
    console.log("upvote");
    suggestion.upvotes.push(currentUserID);
    isLiked = false;
  } else {
    console.log("remove upvote");
    isLiked = true;
    suggestion.upvotes.pull(currentUserID);
  }

  await suggestion.save();

  return {
    message,
    isLiked,
  };
};
export default upvoteAction;
