const globals = require("./globals");

module.exports = function(server) {
  server.get("/projects", (req, res) => {
    res.json(globals.projects);
  });

  server.post("/projects", (req, res) => {
    const { id, title, tasks } = req.body;

    globals.projects.push({
      id,
      title,
      tasks
    });

    res.json(globals.projects);
  });
};
