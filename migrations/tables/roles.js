module.exports = (pgm) => {
	pgm.createTable("roles", {
		id: "id",
		name: {
			type: "CITEXT",
			notNull: true
	 	}
	});
	pgm.createIndex("roles", "name", { "unique": true });
}
