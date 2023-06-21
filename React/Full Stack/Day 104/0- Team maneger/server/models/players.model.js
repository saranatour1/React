const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name needs to be at least 3 characters"],
      maxLength: [60, "Name needs to be less than 60 characters"],
    },
    position: {
      type: String,
      enum: [
        "Forward/Striker",
        "Midfielder",
        "Goalkeeper",
        "Defender",
        "Center-back",
        "Full-back",
        "Wing-back",
        "Central Midfielder",
        "Attacking Midfielder",
        "Defensive Midfielder",
        "Wide Midfielder",
        "Winger",
        'empty'
      ],
      default: "empty",
      minLength: [3, "Position needs to be at least 3 characters"],
      // required: false,
    },
    
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playersSchema);

module.exports = Player;
