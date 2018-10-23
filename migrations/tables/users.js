module.exports = (pgm) => {
	pgm.createTable("users", {
	id: "id",
		rcs_id: {
		type: "CITEXT",
		notNull: true
	},
	role_id: {
		type: "INTEGER",
		notNull: true,
		references: '"roles"'
	},
	first_name: {
		type: "CITEXT",
		notNull: true
	},
	last_name: {
		type: "CITEXT",
		notNull: true
	}
	});
	pgm.createIndex("users", "rcs_id", { "unique": true });
}
