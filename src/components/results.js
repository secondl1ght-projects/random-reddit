//component for showing either Subreddit or Post

import React from 'react';
import Subreddit from './subreddit';
import Post from './post';
import '../styles/index.css';

export default function Results({view, results}) {
  if (view === 'sub') {
  return <Subreddit subreddit={results}/>;
  }
  else if (view === 'post') {
    return <Post post={results}/>
  }
  else {
    return <div id='landing'><i className="fab fa-reddit-alien"></i></div>
  }
};
