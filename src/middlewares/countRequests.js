module.exports = function(req, res, next) {
  console.count("Número de requisições");

  next();
};
