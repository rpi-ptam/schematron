module.exports = (pgm) => {
	pgm.createTable("lots", {
		id: "id",
		name: {
			type: "CITEXT",
			notNull: true
	 	}
	});
	pgm.createIndex("lots", "name", { "unique": true });
}
