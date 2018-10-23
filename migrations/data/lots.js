module.exports = (pgm) => {
  var statement = "INSERT INTO lots (name) VALUES "
  + "('Blitman Residence Commons'), ('City Station'), ('RHAPS'), ('BARH'), ('Colvin'), "
  + "('Albright'), ('Colonie Apartments'), ('Beman'), ('Brinsmaid'), ('Stackwyck'), "
  + "('Field House'), ('North Lot'), ('Polytechnic Apartments')"
  pgm.db.query(statement);
}
