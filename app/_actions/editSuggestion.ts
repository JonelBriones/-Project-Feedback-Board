"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editSuggestion = async (suggestionID: any, formData: any) => {
  await connectDB();
  const suggestionById = await Feedback.findById(suggestionID);

  console.log(suggestionById);

  let suggestionForm = {
    title: formData.get("title"),
    category: formData.get("category"),
    status: formData.get("status"),
  };

  const updatedSuggestion = await Feedback.findByIdAndUpdate(
    suggestionID,
    suggestionForm
  );

  revalidatePath("/", "layout");
  redirect(`/suggestion/${updatedSuggestion._id}`);
};
