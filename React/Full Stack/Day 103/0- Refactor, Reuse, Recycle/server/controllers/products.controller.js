const Product = require("../models/products.model");
// rretrieve all products, as a list of array objects. 
module.exports.findAllProducts = (req, res) => {
  // console.log("all ");
  Product.find()
    .then((allProducts) => {
      res.json(allProducts); // this line is edited
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving all the Products ",
        error: err,
      });
    });
};

// edited this so that it returns a single object array, not an object 
module.exports.findOneSingleProduct = (req, res) => {
  console.log("hi");
  Product.findOne({ _id: req.params.id })
    .then((Product) => {
      res.json( Product); // this line is edited 
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong in retrieving a single Product ",
        error: err,
      });
    });
};


// Refactored creating an object function, to create an array instead of an object
module.exports.createNewProduct = (req, res) => {
  // console.log(req);
  const { title ,price ,descreption} = req.body;
  Product.create({
    title ,
    price ,
    descreption
  })
    .then((lastCreatedProduct) => {
      res.json(lastCreatedProduct );
      // console.log(lastCreatedProduct);
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong with creating a new Product ",
        error: err,
      });
    });
};


// updated this function so that it updated the vaalues , but does not return an object. 
module.exports.updateProduct = (request, response) => {
  // const { title ,price ,descreption} = req.body;
  // console.log(request.body);
  Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true}) // this line is edited
      .then(updatedProduct => {response.json(updatedProduct); console.log(updatedProduct);}) 
      .catch(err => {res.json({
        message: "Something went wrong with Updating a Product ",
        error: err,
      });});
}

// delete a product by id 
module.exports.deleteProduct = (request, response) => {
  // console.log(request.body); 
  Product.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

