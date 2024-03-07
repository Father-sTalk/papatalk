"use client";
import React from "react";

import LandingImage from "@/components/pages/home/landing_image";

export default function HomePage() {
  return (
    <section className="w-full">
      <LandingImage
        title="아빠의 첫 걸음"
        content="기다림,설레임 만으로 아빠가 될 수 있을까?"
        imgSrc="/img/home/landing_image.png"
        buttonString="자세히 보기"
        buttonLink="about"
      />
    </section>
  );
}
