require('dotenv').config();
const express = require('express');
// import express from 'express'; // same as above
const app = express(); // app has now all the functionality of express. (as we use get/listen etc)
const port = process.env.PORT;

const githubData = {
  "login": "mzain-k",
  "id": 223207046,
  "node_id": "U_kgDODU3ehg",
  "avatar_url": "https://avatars.githubusercontent.com/u/223207046?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mzain-k",
  "html_url": "https://github.com/mzain-k",
  "followers_url": "https://api.github.com/users/mzain-k/followers",
  "following_url": "https://api.github.com/users/mzain-k/following{/other_user}",
  "gists_url": "https://api.github.com/users/mzain-k/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mzain-k/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mzain-k/subscriptions",
  "organizations_url": "https://api.github.com/users/mzain-k/orgs",
  "repos_url": "https://api.github.com/users/mzain-k/repos",
  "events_url": "https://api.github.com/users/mzain-k/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mzain-k/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Muhammad Zain Khan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2025-07-28T05:01:23Z",
  "updated_at": "2026-06-18T08:37:50Z"
}

app.get('/', (req, res) => {
  res.send('hello, dunya');
});

app.get('/login', (req, res) => {
    res.send('<h1>please login to github using id\n<h2>Protect your Password</h1>')
})

app.get('/follow', (req, res) => {
    res.send('<h2>follow me on github and give stars to my repos</h2> \n <a href="https://github.com/mzain-k" target="_blank">Open Github in New Tab</a>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

//process.env.VARIABLE_NAME this is syntax for .env file
app.listen(port, () => {
  console.log(`Zain's first app listening on port http://localhost:${port}`);
});