import React from "react";

import { Input } from "@nextui-org/react";
import Link from "next/link";

import { BtnBasic } from "../bootstrap/button/btn_basic";
// TODO:: 이메일 인증 api 연결
const CardConfirmEmail = () => {
  const [email, setEmail] = React.useState<string>("");

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-layout_black text-h4">비밀번호 초기화</p>
        <p className="w-full text-caption">
          가입 시 등록했던 이메일로 초기화 된 비밀번호를 보내드립니다.
        </p>
      </div>
      <div className="flex w-full flex-wrap items-center md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="아이디"
          value={email}
          variant="bordered"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="아이디(이메일을 입력해 주십시오.)"
          labelPlacement="outside"
          className="text-base"
        />
      </div>
      <div className="flex flex-col gap-4">
        <BtnBasic color="primary" fullWidth>
          전송하기
        </BtnBasic>
        <div className="w-full flex flex-row gap-2 justify-center text-caption">
          <span> 비밀번호가 생각나셨나요?</span>
          <Link href="/login" className="text-primary-500">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardConfirmEmail;
