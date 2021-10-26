const mongoose = require("mongoose");
const { Schema } = mongoose;

const costScheme = new Schema({
  text: String,
  totalMoney: Number,
  date: String,
});

module.exports = costAccounting = mongoose.model("costAccounting", costScheme);