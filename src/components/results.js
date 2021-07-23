//component for showing either Subreddit or Post

import React from "react";
import Subreddit from "./subreddit";
import Post from "./post";
import "../styles/index.css";

export default function Results({ view, results, loading }) {
  function handleAlienClick() {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let alien = document.querySelector('#alien');
  alien.style.color = getRandomColor();
  }
  if (view === "sub") {
    return <Subreddit subreddit={results} loading={loading} />;
  } else if (view === "post") {
    return <Post post={results} loading={loading} />;
  } else {
    return (
      <div id="landing">
        <i className="fab fa-reddit-alien" id='alien' onClick={handleAlienClick}></i>
      </div>
    );
  }
}
