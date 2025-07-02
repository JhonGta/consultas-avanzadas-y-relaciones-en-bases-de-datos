const mongoose = require('./src/db');
const Usuario = require('./src/models/Usuario');
const Laboratorio = require('./src/models/Laboratorio');
const Equipo = require('./src/models/Equipo');

async function runConsultas() {
  // 1. Listar todos los usuarios
  const usuarios = await Usuario.find();
  console.log('Usuarios:', usuarios);

  // 2. Buscar laboratorios que tengan equipos disponibles
  const equiposDisponibles = await Equipo.find({ estado: 'disponible' }).populate('laboratorio');
  console.log('Equipos disponibles y su laboratorio:', equiposDisponibles);

  // 3. Contar cantidad de equipos por estado
  const cantidadDisponibles = await Equipo.countDocuments({ estado: 'disponible' });
  console.log('Cantidad de equipos disponibles:', cantidadDisponibles);

  // 4. Buscar usuarios cuyo correo termine en @universidad.edu
  const usuariosCorreo = await Usuario.find({ correo: /@universidad\.edu$/ });
  console.log('Usuarios con correo @universidad.edu:', usuariosCorreo);

  // 5. Promedio de equipos por laboratorio usando aggregate
  const promedioEquipos = await Equipo.aggregate([
    { $group: { _id: "$laboratorio", total: { $sum: 1 } } },
    { $group: { _id: null, promedio: { $avg: "$total" } } }
  ]);
  console.log('Promedio de equipos por laboratorio:', promedioEquipos);

  // 6. Relación: obtener equipos con datos completos de laboratorio (populate)
  const equiposConLaboratorio = await Equipo.find().populate('laboratorio');
  console.log('Equipos con datos de laboratorio:', equiposConLaboratorio);

  mongoose.connection.close();
}

runConsultas().catch(console.error);
