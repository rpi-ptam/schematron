module.exports = (pgm) => {
	pgm.createTable("appeals", {
		id: "id",
		ticket_id: {
			type: "integer",
			notNull: true,
			references: '"tickets"'
		},
		justification: {
			type: "VARCHAR(2048)",
			notNull: true
		},
		appealed_at: {
			type: "timestamp",
			notNull: true
		},
		verdict_id: {
			type: "integer",
			references: '"verdicts"'
		},
		verdict_comment: {
			type: "VARCHAR(512)"
	 	},
		reviewed_by: {
			type: "integer",
			references: '"users"'
		},
		reviewed_at: {
			type: "timestamp"
		}
	});
	pgm.createIndex("appeals", "ticket_id", { "unique": true });
}
