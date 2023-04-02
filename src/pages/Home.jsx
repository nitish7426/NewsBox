import axios from "axios";
import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const Home = () => {
  const fetchData = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
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
  } = useInfiniteQuery(["top headlines"], fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      return Math.ceil(lastPage.totalResults / 20) != allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });
  console.log(data);
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center text-lg font-medium justify-center">
        Sorry something went wrong. Try after some time.
      </div>
    );
  }
  return (
    <div className="px-4 py-6 md:px-8 space-y-6">
      {/* <h1 className="text-2xl font-bold underline decoration-[3px] decoration-orange-500 underline-offset-[3px] ">
        Top Headlines
      </h1> */}
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

export default Home;
