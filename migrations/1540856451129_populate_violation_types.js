const violationTypesPopulator = require("./data/violation_types");

exports.up = (pgm) => {
  violationTypesPopulator(pgm);
};