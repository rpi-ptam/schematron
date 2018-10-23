const rolesPopulator = require("./data/roles");

exports.up = (pgm) => {
  rolesPopulator(pgm);
};
