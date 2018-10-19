exports.up = pgm => {
	pgm.createTable("user", {
	rcs_id: { type: "varchar", primaryKey: true } 
	role: { type: "integer", notNull: true, references: '"role"' }
	firstname: { type: "varchar" }
	lastname: { type: "varchar" }
	}); 
}
