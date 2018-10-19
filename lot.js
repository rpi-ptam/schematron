exports.up = pgm => {
	pgm.createTable("lot", {
		id: "id",
		value: { type: "varchar", notNull: true }
	});
}
