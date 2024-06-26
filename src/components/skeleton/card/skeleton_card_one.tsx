import React from "react";

const SkeletonCardOne = () => {
  return (
    <article className="w-full h-[6.5rem] flex gap-lg p-lg border border-default-300 rounded-md animate-pulse">
      <div className="min-w-[7.5rem] h-full bg-gray-300 rounded-md"></div>
      <div className="flex flex-col justify-between min-w-0 w-full">
        <div className="flex flex-col gap-sm min-w-0">
          <div className="w-full h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex space-x-4">
          <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </article>
  );
};

export default SkeletonCardOne;
