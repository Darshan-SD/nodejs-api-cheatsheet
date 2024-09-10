// Import necessary modules here
const express = require('express');
const app = express();

// Grab port number from an environment variable 'PORT' or 8000
const PORT = process.env.PORT || 8000;

// To accept JSON data from the request
app.use(express.json());

// Import Routes
const messageRoute = require("./routes/messageRoute");
app.use("/message", messageRoute);

// Listening port on 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});