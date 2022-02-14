const {model, Schema} = require('mongoose');

const Cadastro = model(
    "Cadastro",
    new Schema({
        name:{ type: String, require: true},
        lastName:{ type: String, required:true},
        email:{ type: String, required:true},
        adress:{ type: String, required:true},
        userName:{ type: String, required:true},
        password:{ type: Number, required:true},
        newsletter:{ type: Boolean, required: false},
    })
);

module.exports = Cadastro