import db from '../config/dbConnect.js';

const user = new db.Schema({
  nome: { type: String, required: true },
  coins: { type: Number, required: true },
});

export default db.model('User', user);
