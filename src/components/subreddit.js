//Subreddit component to render results from API call

import React from 'react';
import '../styles/index.css';

export default function Subreddit({subreddit}) {
  //let randomSubreddit = JSON.stringify(subreddit, null, 2);
  if (!subreddit || !subreddit.data) {
    return (<div className='box'>
        <h2>Fetching results...</h2>
        </div>)
  };
  const subredditData = subreddit.data;
  const subredditChildren = subredditData.children;
  return (<div className="box"><pre>
     {subredditChildren[0].data.subreddit}
    </pre>
    </div>);

};
