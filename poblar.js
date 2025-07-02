const mongoose = require('./src/db');
const Usuario = require('./src/models/Usuario');
const Laboratorio = require('./src/models/Laboratorio');
const Equipo = require('./src/models/Equipo');

async function poblar() {
  // Limpiar colecciones
  await Usuario.deleteMany({});
  await Laboratorio.deleteMany({});
  await Equipo.deleteMany({});

  // Crear laboratorios
  const lab1 = await Laboratorio.create({ nombre: 'Lab Computo', ubicacion: 'Edificio A' });
  const lab2 = await Laboratorio.create({ nombre: 'Lab Redes', ubicacion: 'Edificio B' });

  // Crear usuarios
  await Usuario.create([
    { nombre: 'Ana Perez', correo: 'ana@universidad.edu' },
    { nombre: 'Luis Gomez', correo: 'luis@gmail.com' },
    { nombre: 'Maria Lopez', correo: 'maria@universidad.edu' }
  ]);

  // Crear equipos
  await Equipo.create([
    { nombre: 'PC-01', estado: 'disponible', laboratorio: lab1._id },
    { nombre: 'PC-02', estado: 'en uso', laboratorio: lab1._id },
    { nombre: 'Router-01', estado: 'disponible', laboratorio: lab2._id },
    { nombre: 'Switch-01', estado: 'mantenimiento', laboratorio: lab2._id },
    { nombre: 'PC-03', estado: 'disponible', laboratorio: lab1._id }
  ]);

  console.log('Datos de ejemplo insertados correctamente.');
  mongoose.connection.close();
}

poblar().catch(console.error);
