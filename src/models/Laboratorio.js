const mongoose = require('mongoose');

const LaboratorioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  // Puedes agregar más campos según necesidad
});

module.exports = mongoose.model('Laboratorio', LaboratorioSchema);
