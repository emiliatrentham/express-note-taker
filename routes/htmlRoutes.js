const path = require("path");
const htmlRouter =
  require("express").Router();

htmlRouter.get(
  "/notes",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "../public/notes.html"
      )
    );
  }
);

htmlRouter.get(
  "/",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "../public/index.html"
      )
    );
  }
);

htmlRouter.get(
  "/*",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "../public/404.html"
      )
    );
  }
);

module.exports = htmlRouter;

// // Dependencies
// const path = require("path");

// // Routing
// module.exports = (app) => {
//     app.get("/notes", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
// };
