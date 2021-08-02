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
  });
}

//get random subreddit info
export async function getSubredditInfo(subname) {
  return new Promise(async (resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const url = `https://www.reddit.com/r/${subname}/about.json`;

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
  });
}

//get random post

export async function getRandomPost() {
  return new Promise(async (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const spamFilter = [
      "CryptoMarsShots",
      "CryptoMoon",
      "CryptoMars",
      "MarsWallStreet",
      "CryptoMoonCoins",
      "CryptocurrencyICO",
      'AllCryptoBets',
      'cryptostreetbets'
    ];
    const url = "https://www.reddit.com/random.json";

    xhr.responseType = "json";

    xhr.onreadystatechange = async () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (
          xhr.response[0].data.children[0].data.selftext &&
          !spamFilter.includes(xhr.response[0].data.children[0].data.subreddit)
        ) {
          resolve(xhr.response);
        } else {
          const post = await getRandomPost();
          return resolve(post);
        }
      } else {
        return "Trouble reaching the Reddit API.";
      }
    };

    xhr.open("GET", url);

    xhr.send();
  });
}
