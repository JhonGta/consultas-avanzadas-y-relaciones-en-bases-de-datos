

# Consultas Avanzadas con MongoDB, Mongoose y Docker

## Portada
**Título del proyecto:** Consultas Avanzadas con MongoDB, Mongoose y Docker  
**Nombre:** [Tu Nombre Completo]  
**Carrera / Curso:** [Tu Carrera o Materia]  
**Fecha de entrega:** [Fecha]

---

## Introducción
Esta práctica tiene como propósito reforzar el modelado de datos NoSQL y la implementación de consultas avanzadas y relaciones entre colecciones usando Mongoose y MongoDB. Se utiliza Docker para facilitar la configuración y despliegue del entorno. Las consultas avanzadas y las relaciones son fundamentales para explotar el potencial de bases de datos NoSQL como MongoDB, permitiendo obtener información compleja y estructurada de manera eficiente.

---

## Entorno de Desarrollo
- **Docker Compose**: Se utilizó para levantar los servicios de MongoDB y Mongo Express de forma rápida y aislada.
- **Dependencias instaladas:**
  - mongoose
  - dotenv (opcional, para variables de entorno)

---

## Modelado de Datos
El modelo de datos está compuesto por tres colecciones principales:
- **Usuario:** nombre, correo
- **Laboratorio:** nombre, ubicación
- **Equipo:** nombre, estado, referencia a laboratorio (relación uno a muchos)

**Relaciones:**
- Un laboratorio puede tener muchos equipos (uno a muchos, referenciado por ObjectId en Equipo).
- Los equipos referencian a su laboratorio mediante el campo `laboratorio`.

**Estructura de carpetas:**
```
src/
├── db.js
└── models/
    ├── Usuario.js
    ├── Laboratorio.js
    └── Equipo.js
```

---

## Desarrollo de Consultas
Se implementaron consultas básicas y avanzadas en el archivo `consultas.js`:
- Filtrado, proyección y ordenamiento.
- Consultas con operadores como `$in`, `$gte`, `$regex`, `$exists`.
- Agregaciones con `aggregate` (`$lookup`, `$group`, `$avg`).
- Relaciones entre colecciones usando `.populate()`.

---

## Relaciones entre Colecciones
- Se establecieron relaciones referenciadas mediante ObjectId en el modelo Equipo.
- Se utiliza `.populate()` para obtener los datos completos del laboratorio al consultar equipos.

---

## Instrucciones de Ejecución

1. **Levanta el entorno Docker:**
   ```powershell
   docker-compose up -d
   ```

2. **Instala dependencias:**
   ```powershell
   npm install
   ```

3. **Puebla la base de datos con datos de ejemplo:**
   ```powershell
   node poblar.js
   ```

4. **Ejecuta las consultas:**
   ```powershell
   node consultas.js
   ```


5. **Accede a Mongo Express:**
   - Abre tu navegador en [http://localhost:8081](http://localhost:8081)
   - Usuario: `admin`  Contraseña: `admin123`

---


## Capturas de Pantalla
![Descripción de la imagen](https://i.imgur.com/q3uvpSE.png)
*Descripción: (aquí puedes poner la descripción de la imagen, por ejemplo: "Consulta avanzada ejecutada en Mongo Express mostrando los equipos disponibles.")*

---


## Conclusiones
Durante el desarrollo de esta práctica, reforcé mis conocimientos sobre el modelado de datos en bases NoSQL y la importancia de las relaciones entre colecciones en MongoDB. Aprendí a utilizar Mongoose para definir esquemas y realizar consultas avanzadas, así como a aprovechar las capacidades de agregación y referencias entre documentos. El uso de Docker facilitó la configuración y portabilidad del entorno, permitiendo un flujo de trabajo más ágil y profesional.

Entre las dificultades encontradas estuvieron la correcta configuración de las credenciales de acceso y la gestión de referencias entre colecciones, las cuales resolví revisando la documentación oficial y realizando pruebas iterativas. Esta experiencia me permitió comprender mejor cómo estructurar y consultar datos complejos en MongoDB, habilidades fundamentales para el desarrollo de aplicaciones modernas.

---

## Referencias
- [Documentación oficial de Mongoose](https://mongoosejs.com/)
- [Documentación oficial de MongoDB](https://www.mongodb.com/docs/)
- [Documentación oficial de Docker](https://docs.docker.com/)
