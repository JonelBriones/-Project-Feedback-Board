"use server";
import connectDB from "@/config/database";
import User from "@/models/User";

const getUserById = async (id: string) => {
  await connectDB();
  const user = await User.findById(id).lean();

  return {
    user,
  };
};
export default getUserById;
