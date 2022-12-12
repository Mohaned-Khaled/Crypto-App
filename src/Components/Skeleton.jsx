import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div className="text animate-pulse">
      <div className={`bg-gray-300 rounded-md ${className}`}></div>
    </div>
  );
};

export default Skeleton;
