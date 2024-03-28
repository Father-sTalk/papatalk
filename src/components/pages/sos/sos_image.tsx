"use client";
import React from "react";

import Image from "next/image";
interface Props {
  imgSrc: string;
  title: string;
  content: string;
}
const LandingImage: React.FC<Props> = ({ title, content, imgSrc }) => {
  return (
    <article className="flex justify-between items-center w-full h-[18.375rem] px-[1.5rem] bg-secondary-50">
      <div className="flex flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-h3 text-layout_black">{title}</p>
          <p className="text-button text-default-700">{content}</p>
        </div>
      </div>
      <Image src={imgSrc} alt="landing_image" width={640} height={254} />
    </article>
  );
};

export default LandingImage;
