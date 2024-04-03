import React from "react";

import { usePathname, useRouter } from "next/navigation";

import { ICON } from "@/assets/icon";
import { BtnBasic } from "@/components/bootstrap/button/btn_basic";

const BtnGoCreate = () => {
  const pathname = usePathname();
  const router = useRouter();
  const goToCreate = () => {
    router.push(`${pathname}/create`);
  };
  return (
    <BtnBasic
      size="md"
      color="primary"
      startContent={<ICON.pencil color="white" />}
      className="w-[9.375rem]"
      onClick={goToCreate}
    >
      글쓰기
    </BtnBasic>
  );
};

export default BtnGoCreate;
