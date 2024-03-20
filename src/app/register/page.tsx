"use client";
import React from "react";

import { Input } from "@nextui-org/react";

import { ICON } from "@/assets/icon";
import CenterCardContainer from "@/components/bootstrap/container/center_card_container";
import BtnDuplicationCheck from "@/components/feature/btn_duplicationCheck";
import BtnRegister from "@/components/feature/btn_register";
import { validator } from "@/utils/validate/validate";

const RegisterPage = () => {
  const [isEmailUnique, setEmailUnique] = React.useState<boolean>(false);
  const [isNicknameUnique, setNicknameUnique] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
  const [termsAgreed, setTermsAgreed] = React.useState<boolean>(false);
  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] =
    React.useState<boolean>(false);

  const agreeAllHandler = () => {
    const newAgreedValue = !(termsAgreed && privacyPolicyAgreed);
    setTermsAgreed(newAgreedValue);
    setPrivacyPolicyAgreed(newAgreedValue);
  };

  return (
    <CenterCardContainer>
      <div className="flex flex-col gap-6">
        <span className="text-h4 text-layout_black">회원가입</span>
        <section className="flex flex-col">
          <div className="flex w-full flex-wrap items-center md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="아이디"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={
                email !== "" &&
                (!validator.validateEmail(email) || !isEmailUnique)
              }
              color={
                email && (!validator.validateEmail(email) || !isEmailUnique)
                  ? "danger"
                  : "default"
              }
              errorMessage={
                email && !validator.validateEmail(email)
                  ? "이메일 형식을 확인해주세요."
                  : email && !isEmailUnique
                    ? "이메일 중복 여부를 확인해주세요."
                    : "\u00A0"
              }
              placeholder="아이디(이메일을 입력해 주십시오.)"
              labelPlacement="outside"
              className="text-base"
            />
            <BtnDuplicationCheck
              query={{ email }}
              onCheckResult={setEmailUnique}
            />
          </div>
          <div className="flex w-full flex-wrap items-center md:flex-nowrap mb-6 md:mb-0 gap-4">
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
            <BtnDuplicationCheck
              query={{ nickname }}
              onCheckResult={setNicknameUnique}
            />
          </div>
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
        </section>
        <section className="flex flex-col">
          <div
            onClick={agreeAllHandler}
            className="flex gap-2 py-2 items-center cursor-pointer"
          >
            <ICON.checkBox checked={termsAgreed && privacyPolicyAgreed} />
            <span className="text-subtitle2 text-layout_black">전체동의</span>
          </div>
          <hr />
          <div className="flex flex-col py-2">
            <CheckList
              checked={termsAgreed}
              text="이용약관동의"
              onClickList={setTermsAgreed}
              onClickChevron={() => {}}
            />
            <CheckList
              checked={privacyPolicyAgreed}
              text="개인정보취급동의"
              onClickList={setPrivacyPolicyAgreed}
              onClickChevron={() => {}}
            />
          </div>
        </section>
        <BtnRegister
          validate={isEmailUnique && isNicknameUnique}
          email={email}
          nickname={nickname}
          password={password}
          termsAgreed={termsAgreed}
          privacyPolicyAgreed={privacyPolicyAgreed}
        />
      </div>
    </CenterCardContainer>
  );
};

export default RegisterPage;

interface CheckListProps {
  checked: boolean;
  text: string;
  onClickList: React.Dispatch<React.SetStateAction<boolean>>;
  onClickChevron: () => void;
}
const CheckList: React.FC<CheckListProps> = ({
  checked,
  text,
  onClickList,
  onClickChevron,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div
        role="button"
        onClick={() => onClickList((prev) => !prev)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <ICON.checkBox checked={checked} />
        <span className="text-subtitle2 text-layout_black">{text}</span>
      </div>
      <div role="button" onClick={onClickChevron}>
        <ICON.chevronRight />
      </div>
    </div>
  );
};
