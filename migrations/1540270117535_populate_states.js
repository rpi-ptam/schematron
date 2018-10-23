const statePopulator = require("./data/states");

exports.up = (pgm) => {
  statePopulator(pgm);
};
