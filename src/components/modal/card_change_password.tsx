import React from "react";

import { Input } from "@nextui-org/react";

import { validator } from "@/utils/validate/validate";

const CardChangePassword = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p className="text-layout_black text-h4">비밀번호 변경</p>
      <Input
        type="password"
        label="비밀번호(8~20자리, 영문, 숫자, 특수문자 포함)"
        value={password}
        variant="bordered"
        onChange={(e) => setPassword(e.target.value)}
        isInvalid={password !== "" && !validator.validatePassword(password)}
        color={
          password && !validator.validatePassword(password)
            ? "danger"
            : "default"
        }
        errorMessage={
          password && !validator.validatePassword(password)
            ? "비밀번호 형식을 확인해주세요."
            : "\u00A0"
        }
        placeholder="비밀번호를 입력해 주십시오."
        labelPlacement="outside"
        className="text-base"
      />
      <Input
        type="password"
        label="비밀번호 확인"
        value={passwordConfirm}
        variant="bordered"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        isInvalid={passwordConfirm !== "" && passwordConfirm !== password}
        color={
          passwordConfirm !== "" && passwordConfirm !== password
            ? "danger"
            : "default"
        }
        errorMessage={
          passwordConfirm !== "" && passwordConfirm !== password
            ? "비밀번호가 일치하지 않습니다."
            : "\u00A0"
        }
        placeholder="비밀번호를 확인해 주십시오."
        labelPlacement="outside"
        className="text-base"
      />
    </div>
  );
};

export default CardChangePassword;
