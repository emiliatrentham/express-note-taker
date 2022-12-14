// Dependencies
const express = require("express");

// Middleware
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Load express.js
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mount static files middleware
app.use(
  express.static(
    "public"
  )
);

// Routers
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Environment variable port
const PORT =
  process.env.PORT || 8000;

// App listener - Starts server  
app.listen(PORT, () =>
  console.log(
    `Express server listening on port ${PORT}!`
  )
);
