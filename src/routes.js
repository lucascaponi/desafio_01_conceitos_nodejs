const globals = require("./globals");
const _ = require("lodash");
const checkIfProjectIdExists = require("./middlewares/checkIfProjectIdExists");
const countRequests = require("./middlewares/countRequests");

module.exports = function(server) {
  server.use(countRequests);

  server.get("/projects", (req, res) => {
    const { projects } = globals;
    res.json(projects);
  });

  server.get("/projects/:id", checkIfProjectIdExists, (req, res) => {
    const { projects } = globals;
    const { project_index } = req;

    res.json(projects[project_index]);
  });

  server.post("/projects", (req, res) => {
    const { id, title, tasks } = req.body;
    const { projects } = globals;

    projects.push({
      id,
      title,
      tasks
    });

    res.json(projects);
  });

  server.put("/projects/:id", checkIfProjectIdExists, (req, res) => {
    const { title } = req.body;
    const { projects } = globals;
    const { project_index } = req;

    projects[project_index].title = title;

    res.json(projects);
  });

  server.delete("/projects/:id", checkIfProjectIdExists, (req, res) => {
    const { id } = req.params;
    const { projects } = globals;
    const { project_index } = req;

    projects.splice(project_index, 1);

    res.json(projects);
  });

  server.post("/projects/:id/tasks", checkIfProjectIdExists, (req, res) => {
    const { project_index } = req;
    const { title } = req.body;
    const { projects } = globals;

    projects[project_index].tasks.push(title);

    res.json(projects);
  });
};
