"use server";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import GoBack from "@/components/Buttons/GoBack";
import LinkButton from "@/components/Buttons/LinkButton";
import CommentContainer from "@/components/Comments/CommentContainer";
import Feedback from "@/models/Feedback";

const page = async ({ params }: any) => {
  const { id } = await params;
  const suggestionDoc = await Feedback.findById(id).lean();
  const session = await auth();
  const feedback = JSON.parse(JSON.stringify(suggestionDoc));

  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-4 h-screen overflow-auto mt-10 md:mt-0">
      <div className="flex place-items-center justify-between">
        <GoBack />
        {session?.user?.id == feedback.owner && (
          <LinkButton
            text="Edit Feedback"
            color="#4661e6"
            url={`/suggestion/${id}/edit`}
          />
        )}
      </div>
      <CommentContainer feedback={feedback} suggestionID={id} />
    </div>
  );
};

export default page;
