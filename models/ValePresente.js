const {model, Schema} = require('mongoose')

const ValePresente = model(
    "ValePresente",
    new Schema({
        titulo: {type: String, required: true},
        valor: {type: Number, required: true},
        validade: {type: String, default: new Date()}
    })
)

module.exports = ValePresente;