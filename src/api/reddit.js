//random subreddit API request

export async function getRandomSubreddit() {
  return new Promise(async (resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const url = "https://www.reddit.com/random.json";

    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        resolve(xhr.response);

      } else {
        return "Trouble reaching the Reddit API.";
      }
    };

    xhr.open("GET", url);

    xhr.send();
  })
};
