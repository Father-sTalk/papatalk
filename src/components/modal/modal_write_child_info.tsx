import React from "react";

import { Input } from "@nextui-org/react";

import { GenderType } from "@/@types/enum/enums";
import { useModalStore } from "@/store/store_modal";

import { BtnBasic } from "../bootstrap/button/btn_basic";
import CheckBoxBasic from "../bootstrap/checkbox/checkbox_basic";
import DateSelect from "../bootstrap/select/select_date";

const ModalChildInfo = () => {
  const { closeModal } = useModalStore();

  const [checkedGender, setCheckedGender] = React.useState<GenderType | null>(
    null,
  );
  const [height, setHeight] = React.useState<string>("");
  const [weight, setWeight] = React.useState<string>("");

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-4 text-h4">
        <p>파파야, 환영합니다 🤗</p>
        <p>우리 아기 성장을 기록해 보세요.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-subtitle2">성별</label>
          <div className="flex flex-row gap-6">
            <CheckBoxBasic
              checked={checkedGender === GenderType.male}
              text="남자"
              onClickList={() => setCheckedGender(GenderType.male)}
            />
            <CheckBoxBasic
              checked={checkedGender === GenderType.female}
              text="여자"
              onClickList={() => setCheckedGender(GenderType.female)}
            />
          </div>
          <div>
            <label className="text-subtitle2">생년월일</label>
            <DateSelect />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Input
            type="text"
            label="키 (단위: cm)"
            value={height}
            variant="bordered"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="키를 입력해주세요."
            labelPlacement="outside"
            className="text-base"
          />
          <Input
            type="text"
            label="몸무게 (단위: kg)"
            value={weight}
            variant="bordered"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="몸무게를 입력해주세요."
            labelPlacement="outside"
            className="text-base"
          />
        </div>
      </div>
      <BtnBasic color="primary" fullWidth>
        입력
      </BtnBasic>
      <p
        role="button"
        className="text-caption text-center"
        onClick={closeModal}
      >
        다음에 입력하기
      </p>
    </div>
  );
};

export default ModalChildInfo;
