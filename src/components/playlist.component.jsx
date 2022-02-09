import React from "react";
import Video from "./video.component";

export default function Playlist({ data }) {

  const videos = data.items;

  console.log(videos);

  return (
    <>
      { videos && videos.length > 0
        ? videos.map( ( video ) => {
            return <Video key={video.id} video={video} />
          })
        : "Loading..."}
    </>
  );
}
