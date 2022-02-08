import React from 'react';

export default function Video({ video }) {
    const { title, thumbnails, description } = video.snippet;
  return (
      <>
        <img src={thumbnails.high.url} alt={`Thumbnail clip of ${title}`} />
        <h3>{ title }</h3>
        <p>{ description }</p>
      </>
    )
}
