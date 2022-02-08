/* src/App.jsx */
import React, { useState, useEffect } from "react";
import "./App.css";
// import Player from './components/player.component';
import Playlist from './components/playlist.component';
import axios from "axios";

function App() {

  const [ data, setData ] = useState([]);

  useEffect( () => {

    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLR1AMXXKzITu11LgZC9VcA8Fy30r7_YkB&key=AIzaSyD85uY1z0XHm8upzNfhWAm5ELYY6Nv-25A').then((response) => {
      setData(response.data);
    });
  }, [] );

  if ( ! data ) return 'Loading...';

  return (
    <>
      <Playlist data={data} />
    </>
  );
}

export default App;
