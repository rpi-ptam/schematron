module.exports = (pgm) => {
	pgm.createTable("tickets", {
		id: "id",
		external_id: {
			type: "CITEXT",
			notNull: true
		},
		lot_id: {
			type: "integer",
			references: "lots",
			notNull: true
		},
		make: {
			type: "CITEXT",
			notNull: true
		},
		model: {
			type: "CITEXT",
			notNull: true
		},
		tag: {
			type: "CITEXT",
			notNull: true
		},
		plate_state_id: {
			type: "integer",
			references: "states",
			notNull: true
		},
		amount: {
			type: "DECIMAL",
			notNull: true
		},
		issued_at: {
			type: "timestamp",
			notNull: true
		}
	});
	pgm.createIndex("tickets", "external_id", { "unique": true });
}
