import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const AllNews = () => {
  const fetchData = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=entertainment&apiKey=${
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
  } = useInfiniteQuery(["all news"], fetchData, {
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
      <h1 className="text-2xl font-bold underline decoration-[3px] decoration-orange-500 underline-offset-[3px] ">
        All News
      </h1>
      <div className="space-y-4 max-w-screen-lg">
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

export default AllNews;
