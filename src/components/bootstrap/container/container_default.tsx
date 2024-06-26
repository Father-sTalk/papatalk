import React from "react";

import { usePathname } from "next/navigation";

import Header from "@/components/header/header";

interface Props {
  children: React.ReactNode;
}
const exceptPath = ["exception"];

const ContainerDefault: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  const containerClasses = "w-full h-full mx-auto ";
  const isExceptPath = exceptPath.includes(path);

  return (
    <div className={containerClasses}>
      {!isExceptPath && <Header />}
      <div className="container mx-auto max-w-content">{children}</div>
    </div>
  );
};

export default ContainerDefault;
