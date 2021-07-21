import React from 'react';
import '../styles/index.css';

export default function Subreddit({subreddit}) {
  let randomSubreddit = JSON.stringify(subreddit, null, 2);
  return (<div class="box"><pre>
     {randomSubreddit}
    </pre>
    </div>);
};
