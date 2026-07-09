require('dotenv').config();
const express = require('express');
// import express from 'express'; // same as above
const app = express(); // app has now all the functionality of express. (as we use get/listen etc)
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello, dunya');
});

app.get('/github', (req, res) => {
    res.send('github id: mzain-k')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login to github using id\n<h2>Protect your Password</h1>')
})

app.get('/follow', (req, res) => {
    res.send('<h2>follow me on github and give stars to my repos</h2> \n <a href="https://github.com/mzain-k" target="_blank">Open Github in New Tab</a>')
})

//process.env.VARIABLE_NAME this is syntax for .env file
app.listen(port, () => {
  console.log(`Zain's first app listening on port http://localhost:${port}`);
});