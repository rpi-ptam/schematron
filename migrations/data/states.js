module.exports = (pgm) => {
  var statement = "INSERT INTO states (abbreviation) VALUES "
  + "('AL'), ('AK'), ('AR'), ('AZ'), ('CA'), ('CO'), ('CT'), ('DE'), "
  + "('FL'), ('GA'), ('HI'), ('ID'), ('IL'), ('IN'), ('IA'), "
  + "('KS'), ('KY'), ('LA'), ('ME'), ('MD'), ('MA'), ('MI'), "
  + "('MN'), ('MS'), ('MO'), ('MT'), ('NE'), ('NV'), ('NH'), "
  + "('NJ'), ('NM'), ('NY'), ('NC'), ('ND'), ('OH'), ('OK'), "
  + "('OR'), ('PA'), ('RI'), ('SC'), ('SD'), ('TN'), ('TX'), "
  + "('UT'), ('VT'), ('VA'), ('WA'), ('WV'), ('WI'), ('WY')"
  pgm.db.query(statement);
}
