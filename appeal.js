exports.up = pgm => {
	pgm.createTable("user", {
	id: "id"
	ticket: { type: "integer", notNull: true, references: '"ticket"' }
	comment: { type: "varchar" }
	}); 
}
