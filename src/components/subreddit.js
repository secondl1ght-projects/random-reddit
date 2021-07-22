//Subreddit component to render results from API call

import React from "react";
import "../styles/index.css";
import { getSubredditInfo } from "../api/reddit";

export default function Subreddit({ subreddit, loading }) {
  if (loading === true) {
    return (
      <div className="box">
        <div id="loading">
          <h2>
            Loading data<i className="fa fa-spinner fa-spin" />
          </h2>
        </div>
      </div>
    );
  } else {
    //  let randomSubreddit = JSON.stringify(subreddit, null, 2);
    //  console.log(randomSubreddit);
    const subredditData = subreddit;
    const subredditInfo = getSubredditInfo(subredditData[0].data.children[0].data.subreddit);
    const subredditInfoDisplay = JSON.stringify(subredditInfo, null, 2);
    console.log(subredditInfoDisplay);
    const subURL = `https://www.reddit.com/r/${subredditData[0].data.children[0].data.subreddit}`;
    if (subreddit) {
      return (
        <div className="box">
          <h2 id="mainsub">
            <a href={subURL} target="_blank" rel='noreferrer'>
              {subredditData[0].data.children[0].data.subreddit_name_prefixed}
            </a>
          </h2>
        </div>
      );
    } else {
      return (
        <div className="box">
          <h2>Cannot reach the Reddit API...</h2>
        </div>
      );
    }
  }
}
