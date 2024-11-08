import { useParams } from "next/navigation";
import React, { useState } from "react";
import { currentUser as user } from "@/data/user.json";
import { productRequests as productdata } from "@/data/feedbacks.json";
import FeedbackCard from "@/components/cards/FeedbackCard";
import GoBack from "@/components/Buttons/GoBack";
import Image from "next/image";
import Link from "next/link";
import SuggestionCard from "@/components/SuggestionCard";
import Feedback from "@/models/Feedback";
// import convertToSerializableObject from "@/utils/convertToObject";
const page = async ({ params }: any) => {
  const { id } = await params;
  const suggestionDoc = await Feedback.findById(id).lean();
  // const suggestion = convertToSerializableObject(suggestionDoc);
  const suggestion = JSON.parse(JSON.stringify(suggestionDoc));

  console.log("doc", suggestionDoc);
  return (
    <>
      <SuggestionCard feedback={suggestion} />
    </>
  );
};

export default page;
