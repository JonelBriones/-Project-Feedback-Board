"use client";
import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-end mb-4">
      <div className="flex gap-4">
        {session?.user ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn("google", { redirectTo: "/" })}>
            Sign In
          </button>
        )}
        <Image
          width={35}
          height={35}
          src={session?.user?.image || "/images"}
          alt="logo"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
