"use server";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import GoBack from "@/components/buttons/GoBack";
import LinkButton from "@/components/buttons/LinkButton";
import CommentContainer from "@/components/comments/CommentContainer";

import Feedback from "@/models/Feedback";

const page = async ({ params }: any) => {
  const { id } = await params;
  const suggestionDoc = await Feedback.findById(id).lean();
  const session = await auth();
  const feedback = JSON.parse(JSON.stringify(suggestionDoc));

  return (
    <div className="max-w-[540px] w-[100vw] flex flex-col gap-4 h-screen overflow-auto mt-10 md:mt-0">
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
