import React from "react";

export const Loader = () => {
  return (
    <div className=" load flex-col gap-4 w-full flex items-center justify-center pt-8">
      <div className="w-10 h-10 border-8 text-blue-200 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
    </div>
  );
};
