import Image from "next/image";
import React from "react";

const MobileDashboardView = ({ toggleNavbar, setToggleNavbar }: any) => {
  return (
    <div className="flex w-screen justify-between place-items-center bg-white p-4 text-white bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70]">
      <div>
        <h4 className="font-bold">Frontend Mentor</h4>
        <p className="text-sm opacity-85">Feedback Board</p>
      </div>

      <Image
        src={"/images/shared/mobile/icon-hamburger.svg"}
        height={25}
        width={25}
        alt="icon-hamburger"
        className={`cursor-pointer ${toggleNavbar ? "hidden" : ""}`}
        onClick={() => setToggleNavbar(true)}
      />
      <Image
        src={"/images/shared/mobile/icon-close.svg"}
        height={25}
        width={25}
        alt="icon-hamburger"
        className={`cursor-pointer ${!toggleNavbar ? "hidden" : ""}`}
        onClick={() => setToggleNavbar(false)}
      />
    </div>
  );
};

export default MobileDashboardView;
