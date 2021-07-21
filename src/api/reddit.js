//random subreddit API request
import Subreddit from '../components/subreddit';

export function getRandomSubreddit() {


  const xhr = new XMLHttpRequest();

  const url = "https://www.reddit.com/r/random.json";

  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      Subreddit(xhr.response);
    } else {
      return "Trouble reaching the Reddit API.";
    }
  };

  xhr.open("GET", url);
  xhr.setRequestHeader('Access-Control-Allow-Origin');

  xhr.send();
}
