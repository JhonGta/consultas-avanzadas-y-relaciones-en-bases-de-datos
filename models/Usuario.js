// Este archivo ya no es necesario. Usa src/models/Usuario.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  // Puedes agregar más campos según necesidad
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
