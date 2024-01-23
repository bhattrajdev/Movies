import React from "react";

const Loading = ({ state }) => {
  return state ? (
    <div className="flex mt-[40px] justify-center min-h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  ) : null;
};

export default Loading;
