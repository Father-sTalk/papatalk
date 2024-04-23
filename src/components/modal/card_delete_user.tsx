import React from "react";

import { useModalStore } from "@/store/store_modal";

import { BtnBasic } from "../bootstrap/button/btn_basic";
// TODO:: 탈퇴시 사용자 정보 삭제 api 연결
const CardDeleteUser = () => {
  const { closeModal } = useModalStore();
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-layout_black text-h4">정말 탈퇴하시겠어요?</p>
        <p className="w-full text-caption">
          탈퇴를 하신다면 사용하시던 모든정보는 사라집니다.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <BtnBasic color="primary" fullWidth>
          네
        </BtnBasic>
        <p
          role="button"
          className="w-full text-center text-caption"
          onClick={closeModal}
        >
          아니요. 다시 생각해 볼래요.
        </p>
      </div>
    </div>
  );
};

export default CardDeleteUser;
