const globals = require("./globals");
const _ = require("lodash");

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

  server.put("/projects/:id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const index = _.findIndex(globals.projects, { id: id });

    if (index == -1) {
      return res.status(400).json("Project not found");
    }

    globals.projects[index].title = title;

    res.json(globals.projects);
  });

  server.delete("/projects/:id", (req, res) => {
    const { id } = req.params;

    const index = _.findIndex(globals.projects, { id: id });

    if (index == -1) {
      return res.status(400).json("Project not found");
    }

    globals.projects.splice(index, 1);

    res.json(globals.projects);
  });

  server.post("/projects/:id/tasks", (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    const index = _.findIndex(globals.projects, { id: id });

    if (index == -1) {
      return res.status(400).json("Project not found");
    }

    globals.projects[index].tasks.push(title);

    res.json(globals.projects);
  });
};
