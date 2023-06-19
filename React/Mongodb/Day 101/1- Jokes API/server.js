const express = require("express");
const app = express();
require("./config/mongoose.config");
const allJokesRoutes = require("./routes/jokes.routes");
const port = 8000; 

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});
    
app.use(express.json(), express.urlencoded({ extended: true }));
    

allJokesRoutes(app);
    
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));


