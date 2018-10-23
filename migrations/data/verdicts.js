module.exports = (pgm) => {
  var statement = "INSERT INTO verdicts (value) VALUES "
  + "('DENIED'), ('ACCEPTED'), ('ADJUSTED')"
  pgm.db.query(statement);
}
