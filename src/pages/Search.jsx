import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const fetchData = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&pageSize=50&apiKey=${
        import.meta.env.VITE_API_KEY
      }&page=${pageParam}`
    );
    return data;
  };
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery([query], fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      return Math.ceil(lastPage.totalResults / 20) != allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });

  console.log(data);
  if (isError) {
    <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      Sorry something went wrong. Try after some time.
    </div>;
  }
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="px-4 py-6 md:px-8 space-y-6">
      <p className="md:text-xl text-lg font-semibold">
        Search Results of : {query}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {data.pages.map((page) =>
          page.articles.map((value, i) => <NewsCard key={i} {...value} />)
        )}
      </div>
      {hasNextPage && (
        <div className="flex justify-center">
          {isFetchingNextPage ? (
            <Spinner />
          ) : (
            <Button text={"Load more"} onClick={fetchNextPage} />
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
