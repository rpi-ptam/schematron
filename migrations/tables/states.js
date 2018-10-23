module.exports = (pgm) => {
	pgm.createTable("states", {
		id: "id",
		abbreviation: {
			type: "CITEXT",
			notNull: true
	 	}
	});
	pgm.createIndex("states", "abbreviation", { "unique": true });

}
