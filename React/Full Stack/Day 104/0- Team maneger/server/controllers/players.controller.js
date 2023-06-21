const Player = require("../models/players.model");
// rretrieve all products, as a list of array objects.
// get request  
module.exports.findAllPlayers = (req, res) => {
  // console.log("all ");
  Player.find()
    .then((allPlayers) => {
      res.json(allPlayers);  // this line is edited
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the Players ",
        error: err,
      });
    });
};

// get request
// edited this so that it returns a single object array, not an object 
module.exports.findOneSinglePlayer = (req, res) => {
  console.log("hi");
  Player.findOne({ _id: req.params.id })
    .then((Player) => {
      res.json(Player); // this line is edited 
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

// post request 
// Refactored creating an object function, to create an array instead of an object
module.exports.createNewPlayer = (req, res) => {
  // console.log(req);
  const { name ,position} = req.body;
  Player.create({
    name ,
    position ,
  })
    .then((lastCreatedPlayer) => {
      res.json(lastCreatedPlayer );
      console.log(lastCreatedPlayer);
    })
    .catch((err) => {
      res.status(400).json(err); // this is edited 
    });
};


// put request 
// updated this function so that it updated the vaalues , but does not return an object. 
module.exports.updatePlayer = (request, response) => {
  const { name, position } = request.body;

  if (name && name.length < 3) {
    return response.status(400).json({ errors: { name: "Name is too short. Minimum length is 3 characters." }});
  }
  if (!name) {
    return response.status(400).json({ errors: { name: "Name is required" } });
  }

  const updatedPlayer = { name, position }; 

  Player.findOneAndUpdate({ _id: request.params.id }, updatedPlayer, { new: true })
    .then((updatedPlayer) => {
      response.json(updatedPlayer);
      console.log(updatedPlayer);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};


// delete request 
// delete a player by id 
// when a player is deleted they get automatically deleted from the game 
module.exports.deletePlayer = (request, response) => {
  // console.log(request.body); 
  Player.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

