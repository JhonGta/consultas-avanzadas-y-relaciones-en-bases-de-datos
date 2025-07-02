const mongoose = require('mongoose');

const EquipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: String, required: true }, // Ejemplo: 'disponible', 'en uso', etc.
  laboratorio: { type: mongoose.Schema.Types.ObjectId, ref: 'Laboratorio', required: true }
});

module.exports = mongoose.model('Equipo', EquipoSchema);
