# Usa un'immagine ufficiale di Node.js come base
FROM node:18

# Imposta la cartella di lavoro nel container
WORKDIR /app

# Copia i file necessari per installare le dipendenze
COPY package.json package-lock.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il codice del progetto
COPY . .

# Esponi la porta dell'app (modificala se usi un'altra)
EXPOSE 3000

# Comando di avvio dell'app
CMD ["npm", "start"]
