exports.up = pgm => {
	pgm.createTable("state", {
		id: "id",
		value: { type: "varchar", notNull: true }
	});
}
