const path = require("path");
const htmlRouter = require("express").Router();


// Calls notes
htmlRouter.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname,
    "../public/notes.html"
      )
    );
  }
);

// Calls homepage
htmlRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,
        "../public/index.html"
      )
    );
  }
);

// Calls 404 page
htmlRouter.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname,
        "../public/404.html"
      )
    );
  }
);

module.exports = htmlRouter;
