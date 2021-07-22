//Post component to render results from API call

import React from "react";
import "../styles/index.css";

export default function Post({ post, loading }) {
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
    //let randomPost = JSON.stringify(post, null, 2);
    //console.log(randomPost);
    const postData = post;
    const postURL = `https://www.reddit.com${postData[0].data.children[0].data.permalink}`;
    const subURL = `https://www.reddit.com/r/${postData[0].data.children[0].data.subreddit}`;
    const authorURL = `https://www.reddit.com/user/${postData[0].data.children[0].data.author}`;
    if (post) {
      return (
        <div className="box">
          <p>
            <span id="subr">
              <a href={subURL} target="_blank">
                {postData[0].data.children[0].data.subreddit_name_prefixed}
              </a>
            </span>
            <br />
            <br />
            <div id="postcontent">
              <a href={postURL} target="_blank">
                <h3>{postData[0].data.children[0].data.title}</h3>
                {postData[0].data.children[0].data.selftext}
              </a>
              <br />
              <br />
              <i className="fas fa-arrow-up"></i>{" "}
              {postData[0].data.children[0].data.ups}{" "}
              <i className="fas fa-arrow-down"></i>{" "}
              {postData[0].data.children[0].data.downs}{" "}
              <i className="fas fa-trophy"></i>{" "}
              {postData[0].data.children[0].data.total_awards_received}{" "}
              <i className="fas fa-comment"></i>{" "}
              {postData[0].data.children[0].data.num_comments}{" "}
              <i className="fas fa-percentage"></i>{" "}
              {postData[0].data.children[0].data.upvote_ratio}
            </div>
            <br />
            <span id="author">
              <i className="fas fa-user-edit"></i> -{" "}
              <a href={authorURL} target="_blank">
                {postData[0].data.children[0].data.author}
              </a>
            </span>
          </p>
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
