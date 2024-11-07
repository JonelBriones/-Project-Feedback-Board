import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    suggestions: {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
