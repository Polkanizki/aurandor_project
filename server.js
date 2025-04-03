const express = require('express');
const mongoose = require('mongoose');
const characterRoutes = require('./routes/characterRoutes'); // Importa il router dei personaggi

const app = express();

// Middleware per il parsing del JSON
app.use(express.json());

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/aurandor_rpg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connesso a MongoDB'))
  .catch(err => console.error('Errore di connessione a MongoDB:', err));

// Usa le rotte per i personaggi
app.use('/characters', characterRoutes);

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});

