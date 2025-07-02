const mongoose = require('mongoose');

const uri = 'mongodb://root:example@localhost:27017/consultas_avanzadas?authSource=admin';

mongoose.connect(uri)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.error('Error de conexión a MongoDB:', err));

module.exports = mongoose;
