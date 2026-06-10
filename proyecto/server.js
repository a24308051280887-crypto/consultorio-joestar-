const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const URI = 'mongodb://a24308051280887_db_user:oliver123@ac-sk2t4gf-shard-00-00.fngqgn0.mongodb.net:27017,ac-sk2t4gf-shard-00-01.fngqgn0.mongodb.net:27017,ac-sk2t4gf-shard-00-02.fngqgn0.mongodb.net:27017/oliver?ssl=true&replicaSet=atlas-ffofrq-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Fallo al conectar:', err));

const ModeloEmpleado = mongoose.model('Empleado', new mongoose.Schema({
    nombre: String,
    especialidad: String,
    turno: String,
    correo: String,
    telefono: String,
    estatus: String
}), 'empleados');

const ModeloPaciente = mongoose.model('Paciente', new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    sexo: String,
    telefono: String,
    correo: String,
    direccion: String,
    tipo_sangre: String,
    diagnostico: String,
    estatus: String
}), 'pacientes');

const ModeloCita = mongoose.model('Cita', new mongoose.Schema({
    fecha: String,
    hora: String,
    paciente_id: String,
    paciente_nombre: String,
    medico_id: String,
    medico_nombre: String,
    motivo: String,
    estatus: String
}), 'citas');

app.get('/api/empleados', (req, res) => ModeloEmpleado.find().then(d => res.json(d)));
app.post('/api/empleados', (req, res) => new ModeloEmpleado(req.body).save().then(d => res.json(d)));
app.put('/api/empleados/:id', (req, res) => ModeloEmpleado.findByIdAndUpdate(req.params.id, req.body).then(() => res.json({ok:1})));
app.delete('/api/empleados/:id', (req, res) => ModeloEmpleado.findByIdAndDelete(req.params.id).then(() => res.json({ok:1})));

app.get('/api/pacientes', (req, res) => ModeloPaciente.find().then(d => res.json(d)));
app.post('/api/pacientes', (req, res) => new ModeloPaciente(req.body).save().then(d => res.json(d)));
app.put('/api/pacientes/:id', (req, res) => ModeloPaciente.findByIdAndUpdate(req.params.id, req.body).then(() => res.json({ok:1})));
app.delete('/api/pacientes/:id', (req, res) => ModeloPaciente.findByIdAndDelete(req.params.id).then(() => res.json({ok:1})));

app.get('/api/citas', (req, res) => ModeloCita.find().then(d => res.json(d)));
app.post('/api/citas', (req, res) => new ModeloCita(req.body).save().then(d => res.json(d)));
app.put('/api/citas/:id', (req, res) => ModeloCita.findByIdAndUpdate(req.params.id, req.body).then(() => res.json({ok:1})));
app.delete('/api/citas/:id', (req, res) => ModeloCita.findByIdAndDelete(req.params.id).then(() => res.json({ok:1})));

app.get('/', (req, res) => res.sendFile(__dirname + '/joestar.html'));

app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
