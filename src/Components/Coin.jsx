import React from "react";
import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../utlis";

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-medium p-2 rounded border-gray-200 border-b hover:bg-gray-200 transition-all duration-300">
        <div className="flex items-center gap-1 w-full">
          <img src={coin.image} alt={coin.name} className="w-6" />
          <p>
            {coin.name} <span className="text-xs">({coin.symbol})</span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="w-full text-center">
            {currencyFormat(coin.current_price)}
          </span>
        </div>

        <div className="flex justify-end items-center sm:justify-center">
          <p
            className={`flex gap-1  ${
              coin.price_change_percentage_24h < 0
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUp />
            ) : (
              <TrendingDown />
            )}
            {coin.price_change_percentage_24h}
          </p>
        </div>

        <div className="hidden sm:block text-right">
          <p className="font-semibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
