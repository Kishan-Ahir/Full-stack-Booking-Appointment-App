const express = require("express");
const app = express();
const cors = require("cors");
const userroute = require("./routes/user");


// For enabling Cross-Origin Resource Sharing.
app.use(cors());

//Direct requests to userroute
app.use(userroute);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});