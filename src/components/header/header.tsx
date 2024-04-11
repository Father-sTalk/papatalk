"use client";
import React from "react";

import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import { ICON } from "@/assets/icon";
import { menuGroup, MENU, profileMenu } from "@/constants/menu";
import { useMypageSideStore } from "@/store/store_mypage_side";
import useUserStore from "@/store/store_user";

import { BtnBasic } from "../bootstrap/button/btn_basic";
interface MenuProps {
  menu: MenuItem;
}
const Header = () => {
  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const { setSubMenu } = useMypageSideStore();
  const { profileImage } = useUserStore();
  return (
    <header className="text-gray-600 body-font w-full border-b-small border-default-200">
      <div className="container mx-auto flex flex-wrap justify-between p-5 items-center max-w-[80rem]">
        <div className="flex flex-wrap gap-[2.5rem] items-center text-base">
          <Link href={MENU.home.path} className="flex">
            <Image
              src="/img/logo/logo.png"
              alt="header_logo"
              width={90}
              height={20}
            />
          </Link>
          <nav className="flex gap-[0.5rem]">
            {menuGroup.main.map((menu) => (
              <HeaderLink menu={menu} key={menu.path} />
            ))}
          </nav>
        </div>
        <section>
          {profileImage ? (
            <div
              role="button"
              className="relative flex gap-[0.5rem] items-center"
              onClick={() => setDropdown((prev) => !prev)}
            >
              <Avatar src={profileImage} alt="profile_image" size="sm" />
              <ICON.chevronDown size={{ width: 20, height: 20 }} />
              {dropdown && (
                <div className="w-[6.5rem] absolute bottom-0 transform translate-y-full -translate-x-1/3 bg-default-50 rounded-md border border-default-300">
                  {profileMenu.map((menu) => (
                    <Link
                      key={menu.text}
                      href={MENU.mypage.path}
                      onClick={() => setSubMenu(menu.value, menu.subMenu)}
                    >
                      <div className="w-full text-center text-button p-2 hover:text-primary-500">
                        {menu.text}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href={MENU.login.path}>
                <BtnBasic size="sm" bordered="primary">
                  {MENU.login.name}
                </BtnBasic>
              </Link>
              <Link href={MENU.register.path}>
                <BtnBasic size="sm" color="primary">
                  {MENU.register.name}
                </BtnBasic>
              </Link>
            </div>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;

const HeaderLink: React.FC<MenuProps> = ({ menu }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <Link href={menu.path} key={menu.path}>
      <li
        className={`p-2 text-menu ${isClicked ? "text-primary-500" : "text-layout_black hover:text-default-500"}`}
        onClick={handleClick}
      >
        {menu.name}
      </li>
    </Link>
  );
};
