const Product = require("../models/products.model");
// retrieve all the jokes
module.exports.findAllProducts = (req, res) => {
  console.log("all ");
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
  console.log("hi");
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
  // console.log(req);
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


module.exports.updateProduct = (request, response) => {
  console.log(request.body);
  Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedProduct => response.json(updatedProduct))
      .catch(err => response.json(err))
}


module.exports.deleteProduct = (request, response) => {
  console.log(request.body);
  Product.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

