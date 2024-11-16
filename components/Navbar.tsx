"use client";
import React, { useState } from "react";
import "./Navbar/style.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MobileDashboardView from "./Dashboard/MobileDashboardView";

const Navbar = ({ setToggleCategory, categories, toggleCategory }: any) => {
  const { data: session } = useSession();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="relative flex flex-row md:flex-col md:gap-4 ">
      {/*  MOBILE  */}
      <div className="md:hidden">
        <MobileDashboardView
          toggleNavbar={toggleNavbar}
          setToggleNavbar={setToggleNavbar}
        />
        {/* NAVBAR SHOW MOBILE */}
        {toggleNavbar && (
          <div
            className={`absolute slide ${
              toggleNavbar ? "show" : "hide"
            } top-[75px] h-screen  w-[271px] flex flex-col gap-4 p-4 bg-[#f7f8fd] z-10`}
          >
            <div className="bg-white p-4">
              <div className="flex gap-2 text-xs text-white flex-wrap">
                {categories.map((category: any) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-xl font-semibold ${
                      toggleCategory === category
                        ? "bg-[#4661e6]"
                        : "bg-[#f2f4ff] text-[#4661e6] hover:bg-[#cfd7ff]"
                    }`}
                    onClick={() => setToggleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
              <div className="flex justify-between">
                <h4 className="font-bold">Roadmap</h4>
                <Link
                  href={"/roadmap"}
                  className="text-sm underline pb-2 text-[#4661e6]"
                >
                  View
                </Link>
              </div>
              <div className="flex justify-between">
                <div className="flex place-items-center gap-4">
                  <span className="inline-block size-2 rounded-full bg-[#f49f85]" />
                  <span className="opacity-65">Planned</span>
                </div>
                <span className="font-bold">2</span>
              </div>
              <div className="flex justify-between">
                <div className="flex place-items-center gap-4">
                  <span className="inline-block size-2 rounded-full bg-[#ad1fea]" />
                  <span className="opacity-65">In-Progress</span>
                </div>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <div className="flex place-items-center gap-4">
                  <span className="inline-block size-2 rounded-full bg-[#62bcfa]" />
                  <span className="opacity-65">Live</span>
                </div>
                <span className="font-bold">1</span>
              </div>
            </div>
            <div className="flex justify-end">
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
          </div>
        )}
      </div>
      <div className=" hidden h-[137px] md:flex flex-col justify-end bg-white rounded-lg p-4 text-white bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70]">
        <h4 className="font-bold">Frontend Mentor</h4>
        <p className="text-sm opacity-85">Feedback Board</p>
      </div>

      <div className={`hidden md:w-[255px] md:flex flex-col gap-4`}>
        <div className="bg-white rounded-lg p-4">
          <div className="flex gap-2 text-xs text-white flex-wrap">
            {categories.map((category: any) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-xl font-semibold ${
                  toggleCategory === category
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4ff] text-[#4661e6] hover:bg-[#cfd7ff]"
                }`}
                onClick={() => setToggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
          <div className="flex justify-between">
            <h4 className="font-bold">Roadmap</h4>
            <Link
              href={"/roadmap"}
              className="text-sm underline pb-2 text-[#4661e6]"
            >
              View
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#f49f85]" />
              <span className="opacity-65">Planned</span>
            </div>
            <span className="font-bold">2</span>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#ad1fea]" />
              <span className="opacity-65">In-Progress</span>
            </div>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <div className="flex place-items-center gap-4">
              <span className="inline-block size-2 rounded-full bg-[#62bcfa]" />
              <span className="opacity-65">Live</span>
            </div>
            <span className="font-bold">1</span>
          </div>
        </div>
        <div className="flex justify-end">
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
      </div>
    </div>
  );
};

export default Navbar;
