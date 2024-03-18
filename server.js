const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1112;

// Middleware pentru servirea fișierelor statice din directorul 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rute
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta pentru a obține datele despre seriale (exemplu simplu)
app.get('/api/seriale', (req, res) => {
    const seriale = [
        { nume: 'Stranger Things', descriere: 'O serie de groază și mister.' },
        { nume: 'Breaking Bad', descriere: 'O serie despre un profesor de chimie care devine traficant de droguri.' },
        // Adaugă mai multe seriale
    ];
    res.json(seriale);
});

// Ascultăm pe portul definit și afișăm un mesaj când serverul este pornit
app.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}/`);
});
