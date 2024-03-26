"use client";
import React from "react";

import { Button } from "@nextui-org/react";

import useRegisterMutation from "@/models/hooks/auth/post_register.hooks";
interface Props extends ApiRequest.AuthApiTypes.RegisterRequest {
  validate: boolean;
}

const BtnRegister: React.FC<Props> = ({ validate, ...registerData }) => {
  const { mutate } = useRegisterMutation();
  const handleLogin = () => {
    mutate(registerData);
  };
  return (
    <Button
      size="md"
      className="bg-primary text-default-50"
      radius="sm"
      fullWidth
      isDisabled={!validate}
      onClick={handleLogin}
    >
      <span className="text-button">가입</span>
    </Button>
  );
};

export default BtnRegister;
