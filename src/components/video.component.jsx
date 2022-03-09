import React from "react";

export default function Video({ video }) {
  const { title, thumbnails, description } = video.snippet;

  return (
    <article className="video-card bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 hover:scale-110 hover:cursor-pointer h-0 hover:h-auto">
      <div className="w-96 relative">
        <a
          href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
          target="_blank"
        >
          <picture className="rounded-t-lg">
            <img src={thumbnails.high.url} alt={`Thumbnail clip of ${title}`} />
          </picture>
        </a>
        <div className="video-card--content">
          <h3 className="pb-2">{title.substring(0, 35)}</h3>
          {description ? (
            <p className="video-card--description">
              {description.substring(0, 120)}...
            </p>
          ) : null}
          <a
            href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
          ></a>
          <a
            href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank"
          >
            Watch!
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
