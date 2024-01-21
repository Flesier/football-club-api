const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

let teams = [];
let games = [];
let events = [];

// Routes
app.get('/teams', (req, res) => {
    res.json(teams);
});

app.post('/teams', (req, res) => {
    const newTeam = req.body;
    teams.push(newTeam);
    res.json(newTeam);
});

app.get('/games', (req, res) => {
    res.json(games);
});

app.post('/games', (req, res) => {
    const newGame = req.body;
    games.push(newGame);
    res.json(newGame);
});

app.get('/events', (req, res) => {
    res.json(events);
});

app.post('/events', (req, res) => {
    const newEvent = req.body;
    events.push(newEvent);
    res.json(newEvent);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});