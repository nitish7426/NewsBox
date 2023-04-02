import React from "react";

const NewsCard = ({
  title,
  urlToImage,
  description,
  url,
  author,
  publishedAt,
  source,
  content,
}) => {
  const date = new Date(publishedAt);
  const formatDate = new Intl.DateTimeFormat("us", {
    timeStyle: "short",
    dateStyle: "medium",
  });
  //   console.log(formatDate.format(date));
  return (
    <article className="p-4 border dark:border-neutral-700 rounded-2xl flex flex-col gap-6 bg-neutral-50 dark:bg-neutral-800/70">
      <div className="bg-neutral-200 dark:bg-neutral-700 rounded-xl overflow-hidden aspect-video">
        <img
          className="w-full h-full object-cover"
          src={urlToImage}
          loading="lazy"
          alt=""
        />
      </div>

      <div className="flex-1 space-y-2">
        <h2 className="md:text-lg font-semibold dark:text-neutral-200">
          {title}
        </h2>
        <p
          className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <a
          className="text-sm dark:text-neutral-200 w-fit tracking-wide hover:underline block"
          href={url}
          target="_blank"
        >
          Read full
        </a>
        <div className="flex items-center justify-between">
          <p className="font-medium">{source.name}</p>
          <div>
            <p className="empty:hidden">{author}</p>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {formatDate.format(date)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
