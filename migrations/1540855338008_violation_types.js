const violationTypesTable = require("./tables/violation_types");

exports.up = (pgm) => {
  violationTypesTable(pgm);
  pgm.addColumns("tickets", {
    violation_type_id: {
      type: "integer",
      references: "violation_types",
      notNull: true
    }
  });
};