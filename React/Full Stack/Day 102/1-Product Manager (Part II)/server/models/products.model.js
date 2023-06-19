const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required:[true,"title is required"],
      minLength:[2,"title needs to be at least 10 charecter"]
    },
    price:{
      type: Number, 
      required: [true, "Please Place a Price"], 
      min: [1], 
    },
    descreption: {
      type: String,
      required:[true,"descreption is required"],
      minLength:[10,"descreption needs to be at least 3 charecter"]
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;

