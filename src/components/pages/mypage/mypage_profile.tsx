"use client";
import React from "react";

import { Avatar, Button, Input } from "@nextui-org/react";

import { ICON } from "@/assets/icon";
import CardWhite from "@/components/bootstrap/card/card_white";
import InputFile from "@/components/bootstrap/input/input_file";
import BtnDuplicationCheck from "@/components/feature/button/btn_duplicationCheck";
import CardConfirmEmail from "@/components/modal/card_confirm_email";
import CardDeleteUser from "@/components/modal/card_delete_user";
import { useModalStore } from "@/store/store_modal";
const MypageProfile = () => {
  const [nickname, setNickname] = React.useState<string>("");
  const [isNicknameUnique, setNicknameUnique] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<File | null>(null);

  const { openModal } = useModalStore();
  const openChangePasswordModal = () => {
    openModal(<CardConfirmEmail />);
  };
  const openDeleteModal = () => {
    openModal(<CardDeleteUser />);
  };

  // TODO:: 기존 이미지랑 비교, 다른지
  const isvalide = (nickname !== "" && isNicknameUnique) || image;
  const style = isvalide ? "primary" : "default";
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <CardWhite>
        <div className="w-full min-w-[28rem] flex flex-col gap-6">
          <div className="text-layout_black text-h4">기본 정보</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-4">
                <Avatar
                  src={image ? URL.createObjectURL(image) : ""}
                  name="보라네 아빠"
                  size="lg"
                  color="secondary"
                />
                <span className="text-subtitle2 text-layout_black">
                  보라네 아빠
                </span>
              </div>
              <InputFile
                size="lg"
                color="primary"
                text="프로필 사진 변경"
                onFileChange={(file) => {
                  setImage(file);
                }}
              />
            </div>
            <div className="flex flex-row items-end gap-2">
              <Input
                type="text"
                label="닉네임"
                value={nickname}
                variant="bordered"
                onChange={(e) => setNickname(e.target.value)}
                isInvalid={nickname !== "" && !isNicknameUnique}
                color={nickname && !isNicknameUnique ? "danger" : "default"}
                errorMessage={
                  nickname && !isNicknameUnique
                    ? "닉네임 중복 여부를 확인해주세요."
                    : "\u00A0"
                }
                placeholder="닉네임을 입력해 주십시오."
                labelPlacement="outside"
                className="text-base"
              />
              <div className="pb-6">
                <BtnDuplicationCheck
                  query={{ nickname }}
                  onCheckResult={setNicknameUnique}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div
                role="button"
                className="w-full flex flex-row justify-between"
                onClick={openChangePasswordModal}
              >
                <span className="text-body2 text-layout_black">
                  비밀번호 초기화
                </span>
                <ICON.chevronRight
                  size={{ width: 20, height: 20 }}
                  color="black"
                />
              </div>
              <div
                role="button"
                className="w-full flex flex-row justify-between"
                onClick={openDeleteModal}
              >
                <span role="button" className="text-body2 text-layout_black">
                  회원 탈퇴
                </span>
                <ICON.chevronRight
                  size={{ width: 20, height: 20 }}
                  color="black"
                />
              </div>
            </div>
            <Button size="lg" color={style}>
              변경 사항 저장
            </Button>
          </div>
        </div>
      </CardWhite>
    </div>
  );
};

export default MypageProfile;
