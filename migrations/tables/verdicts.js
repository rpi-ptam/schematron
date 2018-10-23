module.exports = (pgm) => {
	pgm.createTable("verdicts", {
		id: "id",
		value: {
			type: "CITEXT",
			notNull: true
		}
	});
	pgm.createIndex("verdicts", "value", { "unique": true });
}
