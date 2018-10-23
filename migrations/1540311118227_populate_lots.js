const lotsPopulator = require("./data/lots");

exports.up = (pgm) => {
  lotsPopulator(pgm);
};
