//main App component

import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Results from './components/results';
import {getRandomSubreddit} from './api/reddit';

function App(){
  const [results, setResults] = React.useState([]);
  const [view, setView] = React.useState('');
  const handleOnClickSub = async (ev) => {
    ev.preventDefault();
    const res = await getRandomSubreddit();
    setResults(res);
    setView('sub');
  };
  const handleOnClickPost = async (ev) => {
    ev.preventDefault();
    const res = await getRandomSubreddit();
    setResults(res);
    setView('post');
  };
  return (<>
    <Results results={results} view={view}/>
    <div id='buttons'>
      <button id='subreddit' type="button" name="subreddit" onClick={handleOnClickSub}>Subreddit</button>
      <button id='post' type="button" name="post" onClick={handleOnClickPost}>Post</button><br/><br/>
      <span>Select a button to return a random <span id='highlight'>subreddit</span> or <span id='highlight'>post</span>.</span>
    </div>
    </>
  )
}
ReactDOM.render(<App />, document.querySelector('#App'));
