import React from "react";

import { Button } from "@nextui-org/react";

import useGetDuplicationCheck from "@/models/hooks/auth/get_duplicationCheck.hooks";

interface Props {
  query: ApiRequest.AuthApiTypes.DuplicationCheckRequest;
  onCheckResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const BtnDuplicationCheck: React.FC<Props> = ({ query, onCheckResult }) => {
  const { mutate } = useGetDuplicationCheck(query, onCheckResult);
  const handleCheck = async () => {
    mutate();
  };
  return (
    <Button
      size="md"
      color="primary"
      variant="solid"
      className="text-default-50 p-4"
      radius="sm"
      onClick={handleCheck}
    >
      중복 확인
    </Button>
  );
};

export default BtnDuplicationCheck;
