"use client";
import React from "react";

import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import ContainerCenterCard from "@/components/bootstrap/container/container_center_card";
import BtnLogin from "@/components/feature/button/btn_login";

const LoginPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const router = useRouter();
  return (
    <ContainerCenterCard>
      <div className="flex flex-col gap-6">
        <span className="text-h4 text-layout_black">로그인</span>
        <section className="flex flex-col gap-4">
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
        <p
          role="button"
          className="h-[1.875rem] flex justify-center items-center text-caption"
        >
          비밀번호 초기화
        </p>
        <p className="text-caption text-center">
          파파야가 처음이신가요?{" "}
          <span
            role="button"
            className="text-primary-500"
            onClick={() => router.replace("/register")}
          >
            회원가입
          </span>
        </p>
      </div>
    </ContainerCenterCard>
  );
};

export default LoginPage;
