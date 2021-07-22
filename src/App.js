//main App component

import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Results from './components/results';
import {getRandomSubreddit} from './api/reddit';
import {getRandomPost} from './api/reddit';

function App(){
  const [results, setResults] = React.useState([]);
  const [view, setView] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const handleOnClickSub = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    setView('sub');
    const res = await getRandomSubreddit();
    setResults(res);
    setLoading(false);
  };
  const handleOnClickPost = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    setView('post');
    const res = await getRandomPost();
    setResults(res);
    setLoading(false);
  };
  return (<>
    <Results results={results} view={view} loading={loading}/>
    <div id='buttons'>
      <button id='subreddit' type="button" name="subreddit" onClick={handleOnClickSub}>Subreddit</button>
      <button id='post' type="button" name="post" onClick={handleOnClickPost}>Post</button><br/><br/>
      <span>Select a button to return a random <span id='highlight'>subreddit</span> or <span id='highlight'>post</span>.<br/><aside>*This is completely random so some content may be NSFW.</aside></span>
    </div>
    </>
  )
}
ReactDOM.render(<App />, document.querySelector('#App'));
