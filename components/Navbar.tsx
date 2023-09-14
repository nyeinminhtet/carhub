import React from "react";
import Link from "next/link";
import { CustomButton } from "./";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className=" absolute z-10 w-full">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            className=" object-contain"
            width={118}
            height={18}
          />
        </Link>

        <CustomButton
          title="Sign in"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
