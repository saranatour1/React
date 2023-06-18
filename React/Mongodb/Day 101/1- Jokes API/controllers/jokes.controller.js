const Joke = require("../models/jokes.model");
// retrieve all the jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the jokes ",
        error: err,
      });
    });
};
// get a single joke
module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((joke) => {
      res.json({ joke: joke });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving a single Joke ",
        error: err,
      });
    });
};

//random joke
//sample
exports.getRandomJoke = (req, res) => {
  Joke.countDocuments()
    .exec()
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return Joke.findOne().skip(randomIndex).exec();
    })
    .then((joke) => {
      if (!joke) {
        return res.status(404).json({ error: 'No jokes found' });
      }
      res.json(joke);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to get random joke' });
    });
};


// User.count().exec(function (err, count) {

//   // Get a random entry
//   var random = Math.floor(Math.random() * count)

//   // Again query all users but only fetch one offset by our random #
//   User.findOne().skip(random).exec(
//     function (err, result) {
//       // Tada! random user
//       console.log(result) 
//     })
// })


//create a new joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((lastCreatedJoke) => {
      res.json({ joke: lastCreatedJoke });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong with creating a new joke ",
        error: err,
      });
    });
};

//update existing joke
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ joke: updatedJoke });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong update existing joke ",
        error: err,
      });
    });
};

//deleting a joke
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in deleting a joke",
        error: err,
      });
    });
};
