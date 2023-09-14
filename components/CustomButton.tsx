"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  isDisable,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className=" relative h-6 w-6">
          <Image
            src={rightIcon}
            className=" object-contain"
            alt="right icon"
            fill
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
