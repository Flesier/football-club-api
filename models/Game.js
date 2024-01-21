const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  date: { type: Date, required: true },
  location: String,
  score: String,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
