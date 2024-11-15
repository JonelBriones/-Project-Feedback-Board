"use server";
import GoBack from "@/components/Buttons/GoBack";
import LinkButton from "@/components/Buttons/LinkButton";
import FeedbackCard from "@/components/Feedback/FeedbackCard";

import Feedback from "@/models/Feedback";

// import convertToSerializableObject from "@/utils/convertToObject";
const page = async ({ params }: any) => {
  const { id } = await params;
  const suggestionDoc = await Feedback.findById(id).lean();
  // const suggestion = convertToSerializableObject(suggestionDoc);
  const feedback = JSON.parse(JSON.stringify(suggestionDoc));

  console.log("doc", suggestionDoc);
  return (
    <div className="container max-w-screen-lg flex flex-col gap-4">
      <div className="flex place-items-center justify-between">
        <GoBack />
        <LinkButton
          text="Edit Feedback"
          color="#4661e6"
          url={`/suggestion/${id}/edit`}
        />
      </div>
      <FeedbackCard {...feedback} />
    </div>
  );
};

export default page;
