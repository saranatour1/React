const Author = require("../models/authors.model");
// rretrieve all Authors, as a list of array objects.
module.exports.findAllAuthors = (req, res) => {
  // console.log("all ");
  Author.find()
    .then((allAthors) => {
      res.json(allAthors); // this line is edited
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the Athors ",
        error: err,
      });
    });
};

// edited this so that it returns a single object array, not an object
module.exports.findOneSingleAuthor = (req, res) => {
  console.log("hi");
  Author.findOne({ _id: req.params.id })
    .then((Author) => {
      res.json(Author); // this line is edited
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving a single Author ",
        error: err,
      });
    });
};

// Refactored creating an object function, to create an array instead of an object
module.exports.createNewAuthor = (req, res) => {
  // console.log(req);
  const { name } = req.body;
  Author.create({
    name
  })
    .then((lastCreatedAuthor) => {
      res.json(lastCreatedAuthor);
      // console.log(lastCreatedAuthor);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// updated this function so that it updated the vaalues , but does not return an object.
module.exports.updateAuthor = (request, response) => {
  // console.log(request.body);
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  }) // this line is edited
    .then((updatedAuthor) => {
      response.json(updatedAuthor);
      console.log(updatedAuthor);
    })
    .catch((err) => {
        res.status(400).json(err);
      });
    };


// delete a product by id
module.exports.deleteAuthor = (request, response) => {
  // console.log(request.body);
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
