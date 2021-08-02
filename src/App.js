//main App component

import React from "react";
import ReactDOM from "react-dom";
import Results from "./components/results";
import { getRandomSubreddit } from "./api/reddit";
import { getRandomPost } from "./api/reddit";
import { getSubredditInfo } from "./api/reddit";
function App() {
  const [results, setResults] = React.useState([]);
  const [view, setView] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleOnClickSub = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    setView("sub");
    const res0 = await getRandomSubreddit();
    const res1 = await getSubredditInfo(
      res0[0].data.children[0].data.subreddit
    );
    setResults(res1);
    setLoading(false);
  };
  const handleOnClickPost = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    setView("post");
    const res = await getRandomPost();
    setResults(res);
    setLoading(false);
  };
  return (
    <>
      <Results results={results} view={view} loading={loading} />
      <div id="buttons">
        <button
          id="subreddit"
          type="button"
          name="subreddit"
          onClick={handleOnClickSub}
          disabled={loading ? true : false}
        >
          Subreddit
        </button>
        <button
          id="post"
          type="button"
          name="post"
          onClick={handleOnClickPost}
          disabled={loading ? true : false}
        >
          Post
        </button>
        <br />
        <span>
          Select a button to return a random{" "}
          <span id="highlight">subreddit</span> or{" "}
          <span id="highlight">post</span>.
          <aside>
            You can click on <span id="highlight">subreddits</span>,{" "}
            <span id="highlight">posts</span> and{" "}
            <span id="highlight">users</span> to view on Reddit in a new window.
            <br />
            Embedded post links will open in the same window,{" "}
            <span id="highlight">only click on links you trust</span>.
            <br />
            <span id="highlight">
              *This is completely random so some content may be NSFW.
            </span>
          </aside>
        </span>
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.querySelector("#App"));
