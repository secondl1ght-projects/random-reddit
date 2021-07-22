//Post component to render results from API call

import React from 'react';
import '../styles/index.css';

export default function Post({post}) {
  //let randomSubreddit = JSON.stringify(post, null, 2);
  if (!post || !post.data) {
    return (<div className='box'>
        <h2>Fetching results...</h2>
        </div>)
};
  let postData = post;
  return (<div className="box"><pre>
     {postData.data}
    </pre>
    </div>);
};
