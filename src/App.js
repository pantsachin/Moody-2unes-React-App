import React, { useState } from "react";
import "./styles.css";

const musicD = {
  Love: [
    {
      name: "Yesh shaam mastaani",
      link: "https://www.youtube.com/watch?v=_sZg4EUB3IM"
    },
    {
      name: "Wonderful Tonight by Eric Claptop",
      link: "https://www.youtube.com/watch?v=Pu5c4aEg3NM"
    }
  ],

  Excited: [
    {
      name: "Dream On by Aerosmith",
      link: "https://www.youtube.com/watch?v=89dGC8de0CA"
    },
    {
      name: "Waka Waka by Shakira",
      link:
        "https://www.youtube.com/watch?v=pRpeEdMmmQ0&list=PLsfDGbv9Is0gyKrH1xgVKUIgdYtkf3T72"
    }
  ],

  Sad: [
    {
      name: "Kabira from Yeh Jawani hai Diwani",
      link: "https://www.youtube.com/watch?v=jHNNMj5bNQw"
    },
    {
      name: "Channa Mereya",
      link: "https://www.youtube.com/watch?v=284Ov7ysmfA"
    }
  ],

  Inspired: [
    {
      name: "On top of the World by Imagine Dragons",
      link:
        "https://www.youtube.com/watch?v=w5tWYmIOWGk&list=PLhXQhpqBNAYsiwGQ6e4rxgbQ0gGVfKZ2u&index=5"
    },

    {
      name: "Hall of Fame by The Script",
      link: "https://www.youtube.com/watch?v=mk48xRzuNvA"
    }
  ]
};

var songArrayKey = Object.keys(musicD);

export default function App() {
  var [song, setSong] = useState("Excited");

  function songClickHandler(song) {
    setSong(song);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        Moody Tunes <span>🎵</span>
      </h1>
      <h2>
        Select Music Based on Your Mood <span>🎶</span>{" "}
      </h2>
      <p style={{ fontSize: "smaller" }}>
        What's your mood? Choose according to your mood. Music frequencies can
        match your brain and mood frequencies.{" "}
      </p>

      <div>
        {songArrayKey.map((song) => (
          <button
            onClick={() => songClickHandler(song)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              margin: "1rem 0.5rem",
              borderRadius: "0.5rem"
            }}
          >
            {" "}
            {song}{" "}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul>
          {musicD[song].map((music) => (
            <li
              key={music.name}
              style={{
                padding: "1rem",
                border: "1px solid border",
                borderRadius: "0.5rem",
                width: "85%",
                margin: "1rem 0rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                <a href={music.link}> {music.link}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
