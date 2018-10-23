const lotsTable = require("./tables/lots");
const rolesTable = require("./tables/roles");
const statesTable = require("./tables/states");
const verdictsTable = require("./tables/verdicts");
const usersTable = require("./tables/users");
const ticketsTable = require("./tables/tickets");
const appealsTable = require("./tables/appeals");

exports.up = (pgm) => {
  pgm.createExtension("citext");
  lotsTable(pgm);
  rolesTable(pgm);
  statesTable(pgm);
  verdictsTable(pgm);
  usersTable(pgm);
  ticketsTable(pgm);
  appealsTable(pgm);
};
