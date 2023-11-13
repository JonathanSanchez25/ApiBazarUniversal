//Codigo del servidor

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/porduct');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//cors para que no de error de cors en el front 
//Habilitando cualquier origen

app.use(cors({ origin: '*' }));

//middlewares
app.use('/api',productRoutes);
app.use(express.json());



//Routes

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});

// mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión a la MongoBD establecida'))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log('Server listening on port 3000');
});