import React from "react";

export default function Playlist({ data }) {

  const videos = data.items;

  // return (
  //   <div className="player__container-playlist">
  //     {videos.map((video) => (
  //       <div
  //         key={video.id}
  //         data-key={video.snippet.resourceId.videoId}
  //         onClick={this.props.addVideo}
  //       >
  //         <img
  //           src={video.snippet.thumbnails.medium?.url}
  //           className="player__container-playlist-thumbnail"
  //           alt={video.snippet.title}
  //         />
  //         <h4>{video.snippet.title.substring(0, 35)}</h4>
  //         <p>{video.snippet.description.substring(0, 75)}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <>
      { videos && videos.length > 0
        ? videos.map( ( video, i ) => {
            return <p key={i}>{ video.snippet.title }</p>
          })
        : "Loading..."}
    </>
  );
}
