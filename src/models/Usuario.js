const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  // Puedes agregar más campos según necesidad
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
