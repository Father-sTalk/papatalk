import React from "react";
interface Props {
  children: React.ReactNode;
}
const CardWhite: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-2xl shadow-lg p-11">
      {children}
    </div>
  );
};

export default CardWhite;
