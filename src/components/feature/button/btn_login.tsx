"use client";
import React from "react";

import { Button } from "@nextui-org/react";

import useLoginMutation from "@/models/hooks/auth/post_login.hooks";

const BtnLogin: React.FC<ApiRequest.AuthApiTypes.LoginRequest> = (
  loginData,
) => {
  const { mutate } = useLoginMutation();
  const handleLogin = () => {
    mutate(loginData);
  };
  return (
    <Button
      size="md"
      className="bg-primary text-default-50"
      radius="sm"
      fullWidth
      onClick={handleLogin}
    >
      로그인
    </Button>
  );
};

export default BtnLogin;
