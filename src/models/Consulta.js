import {Schema, model} from 'mongoose';
  

const ConsultaSchema = new Schema({
    nombre: {type: String, required: true, trim : true},
    apellido: {type: String, required: true, trim : true},
    telefono: {type: String, required: true, trim : true},
    consulta: {type: String, required: true, trim : true},
    resuelta: {type: Boolean, required: true, default: false},
}, {
    timestamps: true, // Guarda la fecha de creacion y actualizacion
    versionKey: false // No guarda la version del documento
});


export default model('Consulta', ConsultaSchema);


/* Consulta
    - id: String
    - fecha: Date
    - nombre: String
    - apellido: String
    - telefono: String
    - consulta: String
*/