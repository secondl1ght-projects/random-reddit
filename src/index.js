import './styles/index.css';
import {getRandomSubreddit} from './api/reddit';

export const subredditButton = document.querySelector('#subreddit');
subredditButton.onclick = getRandomSubreddit();
