const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://desafio:123@cluster0.uchv6.mongodb.net/Cluster0',
);
let db = mongoose.connection;

module.exports = db;
