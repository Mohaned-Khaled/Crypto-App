import React from "react";
import Market from "../Components/Market";
import Trending from "../Components/Trending";

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      <Trending />
      <Market />
    </div>
  );
};

export default CryptoHome;
