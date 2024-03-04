import React from "react";

import { ConfirmType } from "@/@types/enum/enums";
import BtnRegister from "@/components/feature/btn_register";

const page = () => {
  return (
    <div>
      <BtnRegister
        validate={ConfirmType.Agree}
        email="first1@naver.com"
        nick_name="firstUser"
        password="first"
        passwordCheck="first"
        private_info_agree_yn={ConfirmType.Agree}
        using_agree_yn={ConfirmType.Agree}
      />
    </div>
  );
};

export default page;
