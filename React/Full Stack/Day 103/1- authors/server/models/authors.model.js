const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "title is required"],
      minLength: [2, "title needs to be at least 10 charecter"],
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorsSchema);

module.exports = Author;
