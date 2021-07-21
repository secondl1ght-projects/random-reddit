//random subreddit API request
import Subreddit from '../components/subreddit';

export const API_ROOT = 'https://www.reddit.com';

export const getRandomSubreddit = async () => {
  const response = await fetch(`${API_ROOT}/r/random.json`);
  const json = await response.json();

  Subreddit(json);
};

//export function getRandomSubreddit() {


//  const xhr = new XMLHttpRequest();

  //const url = "https://www.reddit.com/r/random.json";

//  xhr.responseType = "json";

//  xhr.onreadystatechange = () => {
//    if (xhr.readyState === XMLHttpRequest.DONE) {
  //    Subreddit(xhr.response);
//    } else {
  //    return "Trouble reaching the Reddit API.";
  //  }
//  };

//  xhr.open("GET", url);
//  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

//  xhr.send();
//}
