const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required:[true,"setup is required"],
      minLength:[10,"setup needs to be at least 10 charecter"]
    },
    punchline: {
      type: String,
      required:[true,"punchline is required"],
      minLength:[3,"punchline needs to be at least 3 charecter"]
    },
  },
  {
    timestamps: true,
  }
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
