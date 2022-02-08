import React from "react";

export default function Player() {
  let { title, videoId } = this.props.mainVid;

  let iframeEmbed = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="player__container-player">
      <div className="resp-container">
        <iframe
          className="resp-iframe"
          src={iframeEmbed}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video-1"
        ></iframe>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
