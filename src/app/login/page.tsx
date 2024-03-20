"use client";
import React from "react";

import { Input } from "@nextui-org/react";

import CenterCardContainer from "@/components/bootstrap/container/center_card_container";
import BtnLogin from "@/components/feature/btn_login";

const LoginPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <CenterCardContainer>
      <div className="flex flex-col gap-6">
        <span className="text-h4 text-layout_black">로그인</span>
        <section className="flex flex-col">
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
          <div className="flex w-full flex-wrap items-center md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="password"
              label="비밀번호"
              value={password}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주십시오."
              labelPlacement="outside"
              className="text-base"
            />
          </div>
        </section>
        <BtnLogin email={email} password={password} />
      </div>
    </CenterCardContainer>
  );
};

export default LoginPage;
