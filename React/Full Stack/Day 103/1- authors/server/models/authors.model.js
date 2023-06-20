const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [5, "Name needs to be at least 5 charecter"],
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorsSchema);

module.exports = Author;
