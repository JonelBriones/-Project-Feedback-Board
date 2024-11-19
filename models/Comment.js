import { Schema, model, modles } from "mongoose";

const CommentSchema = new Schema(
  {
    imageUrl: {
      type: String,
    },
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
  },
  { timestamps: true }
);

const Comment = modles.Comment || model("Comment", CommentSchema);
export default Comment;
