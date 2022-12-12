import React from "react";
import useFetch from "../hooks/Fetch";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
  const { response, loading } = useFetch("search/trending");

  if (loading)
    return (
      <div className="wrapper-container ">
        <Skeleton className="w-full h-8 mt-10" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-12 h-8 mt-2" />
      </div>
    );

  return (
    <div className="mt-8">
      <h1 className="title-header">Trending</h1>

      {response &&
        response.coins.map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;
