const verdictsPopulator = require("./data/verdicts");

exports.up = (pgm) => {
  verdictsPopulator(pgm);
};
