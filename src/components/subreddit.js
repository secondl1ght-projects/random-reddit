import React from 'react';
import '../index.js';

export default function Subreddit(response) {

      let randomSubreddit = JSON.parse(response);
      return (<div>{randomSubreddit}</div>);
    };
