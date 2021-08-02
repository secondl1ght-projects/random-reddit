//Subreddit component to render results from API call

import React from "react";
//import { getSubredditInfo } from "../api/reddit";

export default function Subreddit({ subreddit, loading }) {
  const subredditData = subreddit;
  //const [subInfo, setSubInfo] = React.useState({});

  //React.useEffect(() => {
  //if (!subreddit || subreddit.length <=0) return;
  //async function getInfo() {
  //const subredditInfo = await getSubredditInfo(
  //  subredditData[0].data.children[0].data.subreddit
  //  );
  //setSubInfo(subredditInfo);
  //}
  //getInfo();
  //}, [subreddit, subredditData]);

  if (loading === true) {
    const loadingMessages = [
      "Loading data",
      "Blast off!",
      "Calling the Reddit servers",
      "Just a second...",
      "Generating randomness",
      "Here we go!",
      ":)",
      "Thanks for visiting!",
      "Working on your request..."
    ];
    const randomMessage = Math.floor(Math.random() * 9);
    return (
      <div className="box">
        <div id="loading">
          <h2>
            {loadingMessages[randomMessage]}
            <i className="fa fa-spinner fa-spin" />
          </h2>
        </div>
      </div>
    );
  } else {
    //const subredditInfoDisplay = JSON.stringify(subredditData, null, 2);
    //console.log(subredditInfoDisplay);
    const subURL = `https://www.reddit.com/r/${subredditData.data.display_name}`;
    if (subreddit) {
      return (
        <div className="box">
          <div id="subcontent">
            <h2 id="mainsub">
              <a href={subURL} target="_blank" rel="noreferrer">
                {subredditData.data.display_name_prefixed}
              </a>
            </h2>
            <p>
              {subredditData.data.public_description}
              <br />
              <br />
              <i className="fas fa-users"></i>{" "}
              {new Intl.NumberFormat().format(subredditData.data.subscribers)}{" "}
              <i className="fas fa-user-clock"></i>{" "}
              {new Intl.NumberFormat().format(
                subredditData.data.accounts_active
              )}
            </p>
          </div>
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
