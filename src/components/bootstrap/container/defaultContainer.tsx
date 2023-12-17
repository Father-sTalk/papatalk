import React from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/header/header";
import { MENU } from "@/constants/menu";
interface Props {
  children: React.ReactNode;
}
const exceptPath = [MENU.contact.path];

const DefaultContainer: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  const containerClasses =
    "container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 min-h-screen";
  const isExceptPath = exceptPath.includes(path);

  return (
    <div className={containerClasses}>
      {!isExceptPath && <Header />}
      {children}
    </div>
  );
};

export default DefaultContainer;
