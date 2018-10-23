exports.up = (pgm) => {
  pgm.addColumns("tickets", {
    violator_id: {
			type: "integer",
			references: "users",
			notNull: true
		}
  });
};
