import React, {useState} from 'react';
import Subreddit from './subreddit';
import Post from './post';
import {subredditButton} from '../index.js';

export function Results() {
  const [view, setView] = useState('');
  subredditButton.onclick = setView('sub');
  if (view === 'sub') {
    return <Subreddit/>;
  }
  else if (view === 'post') {
    return <Post/>
  }
  else {
    return <div></div>
  }
}
