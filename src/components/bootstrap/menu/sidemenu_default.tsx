import React from "react";

import { useMypageSideStore } from "@/store/store_mypage_side";

import { BtnBasic } from "../button/btn_basic";

interface Props {
  text: string;
  selected: boolean;
  subMenu?: MypageSubTab[];
  onClick: () => void;
}
const SideMenuDefault: React.FC<Props> = ({
  text,
  selected,
  onClick,
  subMenu,
}) => {
  const color = selected ? "primary" : "none";
  const stText = selected ? "font-bold" : "font-normal text-default-400";
  const { currentSubMenu, setSubMenu } = useMypageSideStore();
  return (
    <>
      <BtnBasic color={color} onClick={onClick}>
        <p className={`w-full text-left ${stText}`}>{text}</p>
      </BtnBasic>
      {selected &&
        subMenu?.map((tab) => {
          const stSubMenu =
            tab.subMenu === currentSubMenu ? "text-primary-500" : "none";
          return (
            <li
              key={tab.subMenu}
              className={`ml-6 list-disc text-button ${stSubMenu}`}
              onClick={() => setSubMenu(tab.value, tab.subMenu)}
            >
              {tab.text}
            </li>
          );
        })}
    </>
  );
};

export default SideMenuDefault;
