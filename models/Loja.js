const { model, Schema } = require("mongoose");

const Loja = model(
  "Loja",
  new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    employees: {type: Number, required: false}
  })
)


module.exports = Loja;