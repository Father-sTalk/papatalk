import React from "react";
import Link from "next/link";

import { HeaderMenu, MENU } from "@/constants/menu";
import { ICON } from "@/assets/icon";
interface MenuProps {
  menu: MenuItem;
}
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={MENU.home.path} className="flex">
          <ICON.thumb />
          <span className="ml-3 text-xl">아빠들만의 속 이야기</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {HeaderMenu.map((menu) => (
            <HeaderLink menu={menu} key={menu.path} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
const HeaderLink: React.FC<MenuProps> = ({ menu }) => {
  return (
    <Link href={menu.path} key={menu.path}>
      <li className="mx-2 hover:bg-sb-accent-focus hover:text-white p-2 rounded">
        {menu.name}
      </li>
    </Link>
  );
};
