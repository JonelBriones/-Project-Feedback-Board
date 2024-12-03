"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/auth";
import redirectToSignIn from "./users/redirectToSignIn";

export const deleteSuggestion = async (suggestionID: any) => {
  console.log("deleting...");
  await connectDB();
  const suggestionById = await Feedback.findById(suggestionID);

  const sessionUser = await auth();

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }

  await Feedback.findByIdAndDelete(suggestionID);

  revalidatePath("/", "layout");
  redirect(`/`);
};
