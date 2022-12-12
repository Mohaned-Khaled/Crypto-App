import React from "react";
import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="font-medium mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200 transition-all duration-300">
        <div className="flex items-center justify-center sm:justify-start gap-1">
          <span className="font-semibold">{coin.score + 1}.</span>
          <img src={coin.small} alt={coin.name} className="w-6" />
          <p>{coin.name}</p>
          <small className="text-xs">({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;
