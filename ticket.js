exports.up = pgm => {
	pgm.createTable("ticket", {
	ticket: { type: "varchar", primaryKey: true }
	lot: { type: "integer", references: "lot" }
	state: { type: "integer", references: "state" }
	make: { type: "varchar" }
	model: { type: "varchar" }
	tag: { type: "varchar" }
	amount: { type: "double precision" }
	time: { type: "timestamp" } 
	});
} 
