const globals = require("../globals");
const _ = require("lodash");

module.exports = function(req, res, next) {
  const { id } = req.params;

  const index = _.findIndex(globals.projects, { id: id });

  if (index == -1) {
    return res.status(400).json("Project not found");
  }

  req.project_index = index;

  next();
};
