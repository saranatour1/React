const mongoose = require('mongoose');
const express = require("express");
const app = express();
const allProductsRoutes = require("./routes/products.routes");
const cors = require('cors');
app.use(cors());

require("./config/mongoose.config");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({ extended: true }));
    

allProductsRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));


