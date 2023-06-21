const Game = require("../models/games.model");
const Player = require('../models/players.model')

module.exports.findAllGames = (req, res) => {
  Game.find()
    .then((allGames) => {
      res.json(allGames);
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the Games",
        error: err,
      });
    });
};

module.exports.findOneSingleGame = (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then((game) => {
      res.json(game);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports.createNewGame = (req, res) => {
  const { name } = req.body;

  Player.find()
    .then((players) => {
      const playerIds = players.map((player) => player._id);

      const newGame = new Game({
        name,
        players: playerIds,
      });

      return newGame.save();
    })
    .then((lastCreatedGame) => {
      res.json(lastCreatedGame);
      console.log(lastCreatedGame);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateGame = (req, res) => {
  const { playerId, status } = req.body; 

  Game.findOneAndUpdate(
    { _id: req.params.id, "players._id": playerId }, 
    { $set: { "players.$.status": status } }, 
    { new: true }
  )
    .then((updatedGame) => {
      res.json(updatedGame);
      console.log(updatedGame);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

