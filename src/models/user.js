const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    name: { type: String, required: true },
    coins: { type: Number, required: true },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.models.user || mongoose.model('user', jogadorSchema);
