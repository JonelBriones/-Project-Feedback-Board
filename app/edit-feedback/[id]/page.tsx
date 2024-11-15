"use server";
import EditFeedback from "@/components/Forms/EditFeedback";
import connectDB from "@/config/database";
import Feedback from "@/models/Feedback";
import React from "react";

const page = async ({ params }: any) => {
  const { id } = await params;
  await connectDB();
  const feedback = await Feedback.findById(id).lean();
  return (
    <div>
      <EditFeedback feedback={JSON.parse(JSON.stringify(feedback))} />
    </div>
  );
};

export default page;
