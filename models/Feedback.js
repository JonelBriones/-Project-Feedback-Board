import { Schema, SchemaType, model, models } from "mongoose";

const FeedbackSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: {
      type: String,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
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
        imageUrl: {
          type: String,
        },
        content: {
          type: String,
          require: [true, "Type your comment here"],
        },
        username: {
          type: String,
        },

        replies: [
          {
            owner: {
              type: Schema.Types.ObjectId,
              ref: "User",
              require: true,
            },
            imageUrl: {
              type: String,
            },
            username: {
              type: String,
            },
            content: {
              type: String,
            },
            replyingTo: {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);
export default Feedback;
