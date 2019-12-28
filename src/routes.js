const globals = require("./globals");

module.exports = function(app) {
  app.get("/projects", (req, res) => {
    res.json(globals.projects);
  });
};
