import React from "react";

const ListBasicSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-list h-[2.25rem] gap-1 items-center border-b-1 border-default-300 animate-pulse">
      <div className="h-4 bg-gray-100 rounded-md" />
      <div className="h-4 bg-gray-100 rounded-md" />
      <div className="h-4 bg-gray-100 rounded-md" />
      <div className="h-4 bg-gray-100 rounded-md" />
      <div className="h-4 bg-gray-100 rounded-md" />
    </div>
  );
};

export default ListBasicSkeleton;
