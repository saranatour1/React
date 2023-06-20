const mongoose = require('mongoose');
const express = require("express");
const app = express();
const allAuthorsRoutes = require("./routes/authors.routes");
const cors = require('cors');
const port = 8000; 
app.use(cors());

require("./config/mongoose.config");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({ extended: true }));
    

allAuthorsRoutes(app);
    
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));


