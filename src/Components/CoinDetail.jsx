import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/Fetch";
import Skeleton from "./Skeleton";

const CoinDetail = () => {
  const { id } = useParams();

  const { response, loading } = useFetch(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response)
    return (
      <div className="wrapper-container ">
        <Skeleton className="w-full h-8 mt-10" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-full h-8 mt-2" />
        <Skeleton className="w-[20%] h-8 mt-2" />
      </div>
    );

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p
        className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>
    </div>
  );
};

export default CoinDetail;
