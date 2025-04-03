const Character = require('../models/character');

// Funzione per ottenere tutti i personaggi
async function getAllCharacters(req, res) {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).send('Errore nel recuperare i personaggi');
  }
}

// Funzione per aggiungere un nuovo personaggio
async function addCharacter (req, res)  {
    try {
      const newCharacter = new Character(req.body);
      await newCharacter.save();
      res.status(201).json(newCharacter);
    } catch (error) {
      res.status(500).json({ error: 'Errore nel creare il personaggio' });
    }
  };

// Funzione per aggiornare un personaggio
async function updateCharacter(req, res) {
  const { id } = req.params;
  const { name, race, class: characterClass, alignment, description, abilities, relationships, inventory, image, attack } = req.body;
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(id, {
      name,
      race,
      class: characterClass,
      alignment,
      description,
      abilities,
      relationships,
      inventory,
      image,
      attack
    }, { new: true });
    if (!updatedCharacter) return res.status(404).send('Personaggio non trovato');
    res.json(updatedCharacter);
  } catch (err) {
    res.status(500).send('Errore nell\'aggiornare il personaggio');
  }
}

// Funzione per eliminare un personaggio
async function deleteCharacter(req, res) {
  const { id } = req.params;
  try {
    const deletedCharacter = await Character.findByIdAndDelete(id);
    if (!deletedCharacter) return res.status(404).send('Personaggio non trovato');
    res.send('Personaggio eliminato');
  } catch (err) {
    res.status(500).send('Errore nell\'eliminare il personaggio');
  }
}

module.exports = {
  getAllCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter
};
