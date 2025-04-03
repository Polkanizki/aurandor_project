const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  race: String,
  class: String,
  alignment: String,
  description: String,
  abilities: [{ name: String, power: Number }],
  relationships: Object,
  inventory: [{ item: String, quantity: Number }],
  image: String,
  attack: {
    weapon: String,
    damage: Number
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
