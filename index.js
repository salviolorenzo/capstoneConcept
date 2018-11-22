const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// HOME PAGE
// Display a basic graph of weekly averages, top and lowest scores
// link to Login/ register page
app.get('/', (req, res) => {
  res.send('root');
})

app.get('/login', (req, res) => {
  res.send('login page');
})

app.get('/register', (req, res) => {
  res.send('register page');
})


app.get('/:id([0-9]+)/home', (req, res) => {
  res.send('User home page');

  // Display designed home page
  /*
    Graph of weekly averages, top scores and lowest scores out of the people you follow
    Top/Worst posts of the week
    News that caused those scores
  */
})

app.get('/:id([0-9]+)/setting', (req, res) => {
  res.send('settings');
})


app.listen(3000, () => {
  console.log(`Ready...`);
})