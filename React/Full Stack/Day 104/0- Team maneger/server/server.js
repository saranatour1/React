const mongoose = require('mongoose');
const express = require("express");
const app = express();
const allPlayersRoutes = require("./routes/players.routes");
const allGamesRoutes = require("./routes/games.routes");
const cors = require('cors');
app.use(cors());

require("./config/mongoose.config");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({ extended: true }));
    

allPlayersRoutes(app);
    
allGamesRoutes(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));


