exports.up = (pgm) => {
  pgm.addColumns("appeals", {
    adjustment_amount: {
      type: "DECIMAL",
    }
  });
};
