import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Results from './components/results';
import {getRandomSubreddit} from './api/reddit';

function App(){
  const [results, setResults] = React.useState([]);
  const [view, setView] = React.useState('');
  const handleOnClick = async (ev) => {
    ev.preventDefault();
    const res = await getRandomSubreddit();
    setView('sub');
    setResults(res);
  }
  return (<>
    <Results results={results} view={view}/>
    <div id='buttons'>
      <button id='subreddit' type="button" name="subreddit" onClick={handleOnClick}>Subreddit</button>
      <button id='post' type="button" name="post">Post</button><br/><br/>
      <span>Select a button to return a random <span id='highlight'>subreddit</span> or <span id='highlight'>post</span>.</span>
    </div>
    </>
  )
}
ReactDOM.render(<App />, document.querySelector('#App'));
