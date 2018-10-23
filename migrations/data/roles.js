module.exports = (pgm) => {
  var statement = "INSERT INTO roles (name) VALUES "
  + "('STUDENT'), ('JUDICIAL_BOARD_MEMBER'), ('JUDICIAL_BOARD_CHAIR'), "
  + "('PARKING_OFFICE_OFFICIAL'), ('ADMINISTRATOR')"
  pgm.db.query(statement);
}
