//random subreddit API request
export function getRandomSubreddit() {

  function renderRawResponse(response) {
    let randomSubreddit = JSON.parse(response);
    return randomSubreddit;
  };

  const xhr = new XMLHttpRequest();

  const url = "https://www.reddit.com/r/random.json";

  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
    } else {
      return "Trouble reaching the Reddit API.";
    }
  };

  xhr.open("GET", url);

  xhr.send();
}
