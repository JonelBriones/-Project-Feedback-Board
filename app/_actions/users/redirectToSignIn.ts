import { redirect } from "next/navigation";

const redirectToSignIn = async () => {
  redirect(`/api/auth/signin?callbackUrl=%2F`);
};
export default redirectToSignIn;
