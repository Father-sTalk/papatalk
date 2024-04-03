"use client";
import React from "react";

import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import { ICON } from "@/assets/icon";
import { MenuGroup, MENU } from "@/constants/menu";
import useUserStore from "@/store/store_user";

import { BtnBasic } from "../bootstrap/button/btn_basic";
interface MenuProps {
  menu: MenuItem;
}
const Header = () => {
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
            {MenuGroup.main.map((menu) => (
              <HeaderLink menu={menu} key={menu.path} />
            ))}
          </nav>
        </div>
        <section>
          {profileImage ? (
            <div className="flex gap-[0.5rem] items-center">
              <Avatar src={profileImage} alt="profile_image" size="sm" />
              <ICON.chevronDown size={{ width: 20, height: 20 }} />
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
