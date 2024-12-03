"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/auth";
import redirectToSignIn from "./users/redirectToSignIn";

export const editSuggestion = async (suggestionID: any, formData: any) => {
  await connectDB();
  const suggestionById = await Feedback.findById(suggestionID);

  const sessionUser = await auth();

  if (sessionUser?.user?.id !== suggestionById.owner) {
    return;
  }

  if (!sessionUser || !sessionUser?.user?.id) {
    // throw new Error("User must be signed in");
    redirectToSignIn();
    return;
  }

  let suggestionForm = {
    title: formData.get("title"),
    category: formData.get("category"),
    status: formData.get("status"),
  };

  const updatedSuggestion = await Feedback.findByIdAndUpdate(
    suggestionById._id,
    suggestionForm
  );

  revalidatePath("/", "layout");
  redirect(`/suggestion/${updatedSuggestion._id}`);
};
