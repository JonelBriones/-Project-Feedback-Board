import { Schema, SchemaType, model, models } from "mongoose";

const FeedbackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    upvotes: [
      {
        type: String,
      },
    ],
    comments: [
      {
        owner: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        content: {
          type: String,
        },
        replyingTo: {
          type: Schema.Types.ObjectId,
          ref: "User",
          require: true,
        },

        // replies: [
        //   {
        //     reply: {
        //       owner: {
        //         type: Schema.Types.ObjectId,
        //         ref: "User",
        //         require: true,
        //       },
        //       content: {
        //         type: String,
        //       },
        //       replyingTo: {
        //         type: Schema.Types.ObjectId,
        //         require: true,
        //         ref: "User",
        //       },
        //     },
        //   },
        // ],
      },
    ],
  },
  { timestamps: true }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);
export default Feedback;
