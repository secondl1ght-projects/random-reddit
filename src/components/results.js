import React from 'react';
import Subreddit from './subreddit';
import Post from './post';
import '../styles/index.css';

export default function Results({view, results}) {
  //const [view, setView] = useState('');
  //subredditButton.onclick = setView('sub');
  if (view === 'sub') {
  return <Subreddit subreddit={results}/>;
  }
  else if (view === 'post') {
    return <Post/>
  }
  else {
    return <div id='landing'><i class="fab fa-reddit-alien"></i></div>
  }
}
