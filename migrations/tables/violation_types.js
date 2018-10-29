module.exports = (pgm) => {
	pgm.createTable("violation_types", {
		id: "id",
		type: {
			type: "CITEXT",
			notNull: true
		}
	});
	pgm.createIndex("violation_types", "type", { "unique": true });
};