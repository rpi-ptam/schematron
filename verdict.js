exports.up = pgm => {
	pgm.createTable("verdict", {
		id: "id",
		value: { type: "varchar", notNull: true }
	});
}
