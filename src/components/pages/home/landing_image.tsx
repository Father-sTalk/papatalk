import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { MENU } from "@/constants/menu";
interface Props {
  imgSrc: string;
  title: string;
  content: string;
  buttonString: string;
  buttonLink: keyof typeof MENU;
}
const LandingImage: React.FC<Props> = ({
  title,
  content,
  imgSrc,
  buttonString,
  buttonLink,
}) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(MENU[buttonLink].path);
  };
  return (
    <article className="flex justify-between items-center w-full h-[29.4rem] px-[2.4rem] pt-[4rem] bg-primary-50">
      <div className="flex flex-col gap-[2.4rem]">
        <div className="flex flex-col gap-[0.8rem]">
          <p className="text-h1 text-layout_black">{title}</p>
          <p className="text-h3 text-layout_black">{content}</p>
        </div>
        <div>
          <Button
            size="lg"
            variant="solid"
            color="primary"
            radius="sm"
            onClick={handleButtonClick}
          >
            <span className="text-p py-[5rem]">{buttonString}</span>
          </Button>
        </div>
      </div>
      <Image src={imgSrc} alt="landing_image" width={740} height={254} />
    </article>
  );
};

export default LandingImage;
