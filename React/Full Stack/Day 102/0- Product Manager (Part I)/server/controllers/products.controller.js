const Product = require("../models/products.model");
// retrieve all the jokes
module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      res.json({ Products: allProducts });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the Products ",
        error: err,
      });
    });
};
// get a single Product
module.exports.findOneSingleProduct = (req, res) => {
  console.log("hi")
  Product.findOne({ _id: req.params.id })
    .then((Product) => {
      res.json({ Product: Product });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving a single Product ",
        error: err,
      });
    });
};


//create a new Product
module.exports.createNewProduct = (req, res) => {
  console.log(req);
  Product.create(req.body)
    .then((lastCreatedProduct) => {
      res.json({ Product: lastCreatedProduct });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong with creating a new Product ",
        error: err,
      });
    });
};

//update existing Product
// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((updatedJoke) => {
//       res.json({ joke: updatedJoke });
//     })
//     .catch((err) => {
//       res.json({
//         message: "Something went wrong update existing joke ",
//         error: err,
//       });
//     });
// };

//deleting a joke
// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then((result) => {
//       res.json({ result: result });
//     })
//     .catch((err) => {
//       res.json({
//         message: "Something went wrong in deleting a joke",
//         error: err,
//       });
//     });
// };
