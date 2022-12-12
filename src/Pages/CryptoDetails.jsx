import React from "react";
import CoinDetail from "../Components/CoinDetail";
import HistoryChart from "../Components/HistoryChart";

const CryptoDetails = () => {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
    </div>
  );
};

export default CryptoDetails;
