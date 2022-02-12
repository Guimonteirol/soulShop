const {model, Schema} = require("mongoose");
//define o modelo|define a estrutura desse modelo

const Produto = model(
    "Produto",
    new Schema({
        name: { type: String , required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        quantity: {type: Number, required: true},  
    })
);

module.exports = Produto;

