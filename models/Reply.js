import { Schema, model, modles } from "mongoose";

const ReplySchema = new Schema(
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

const Reply = modles.Reply || model("Reply", ReplySchema);
export default Reply;
