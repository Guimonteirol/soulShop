const {model, Schema} = require("mongoose")

const Cupons = model(
    "Cupons",
    new Schema({
        nomeCupom: {type:String, required:true},
        desconto: {type: Number, required:true},
        descricao: {type:String, required:true},
        validade: {type:String, required:true}
    })
)

module.exports = Cupons