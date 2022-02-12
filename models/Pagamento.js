const {model, Schema} = require("mongoose")

const Pagamento = model(
    "Pagamento",
    new Schema({
       nomeP: {type: String, required: false}
    })
)

module.exports = Pagamento