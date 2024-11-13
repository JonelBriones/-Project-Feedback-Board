"use server";

import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";

const getSuggestionById = async (suggestionID) => {
  await connectDB();
  const suggestion = await Feedback.findById(suggestionID).lean();
  return {
    suggestion,
  };
};
export default getSuggestionById;
