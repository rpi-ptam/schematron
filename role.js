exports.up = pgm => {
	pgm.createTable("role", {
		id: "id",
		value: { type: "varchar", notNull: true }
	});
}
