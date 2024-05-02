import React from "react";

import { usePathname, useRouter } from "next/navigation";

import { ICON } from "@/assets/icon";
import { BtnBasic } from "@/components/bootstrap/button/btn_basic";
interface Props {
  color?: NextuiColor;
}
const BtnGoCreate: React.FC<Props> = ({ color = "primary" }) => {
  const pathname = usePathname();
  const router = useRouter();
  const goToCreate = () => {
    router.push(`${pathname}/create`);
  };
  return (
    <BtnBasic
      size="md"
      color={color}
      startContent={<ICON.pencil color="white" />}
      className="w-[9.375rem]"
      onClick={goToCreate}
    >
      <span className="text-menu">글쓰기</span>
    </BtnBasic>
  );
};

export default BtnGoCreate;
