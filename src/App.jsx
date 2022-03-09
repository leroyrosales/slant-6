/* src/App.jsx */
import React, { useState, useEffect } from "react";
// import Player from './components/player.component';
import Playlist from "./components/playlist.component";
import axios from "axios";
import Header from "./components/header.component";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLR1AMXXKzITu11LgZC9VcA8Fy30r7_YkB&key=${import.meta.env.VITE_SOME_KEY}`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) return "Loading...";

  return (
    <>
      <Header/>
      <section className="flex gap-x-8 flex-row flex-nowrap overflow-x-scroll overflow-y-visible p-8 min-h-[384px]">
        <Playlist data={data} />
      </section>
    </>
  );
}

export default App;
