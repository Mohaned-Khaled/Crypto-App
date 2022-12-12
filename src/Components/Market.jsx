import React from "react";
import useFetch from "../hooks/Fetch";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Market = () => {
  const { response, loading } = useFetch(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  if (loading)
    return (
      <div className="wrapper-container ">
        <Skeleton className="w-full h-8 mt-10" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-[30%] h-8 mt-2" />
      </div>
    );

  return (
    <section className="mt-16">
      <h1 className="title-header">Markets</h1>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Market;
