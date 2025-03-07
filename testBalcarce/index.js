const fs = require('fs');
const path = require('path');

div = document.querySelector('div');

// Ruta del archivo que deseas leer
const filePath = path.join(__dirname, 'test.json'); // Cambia el nombre del archivo según sea necesario

// Leer el archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    
});