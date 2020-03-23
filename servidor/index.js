const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();


// conectar a la base de datos
// conectarDB();

// habilitar express.json
app.use(express.json({ extended: true}));


// puerto de la app
const PORT = process.env.PORT || 4000; //podemos usar cualquier puerto menos 3000 que lo usa React.

// definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// importar rutas
app.use('/api/user', require('./routes/user'));
app.use('/api/games', require('./routes/games'));


// arrancar la app
app.listen(PORT, () => {
    // console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})
