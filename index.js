require("dotenv/config");
require("./database");
//console.log(process.env.MONGODB_URI) vairável de ambiente de segurança

const express = require("express")
const exprhbs = require("express-handlebars")

const app = express();

app.use(express.urlencoded({ extended: true })); //o express vai ser capaz de ler o corpo de requisição de formulario html
app.use(express.json()); //e tbm entende no formato json
app.use(express.static("public")); //os arquivos da pagina public vão ser servidos no servidor

app.engine("handlebars", exprhbs.engine());
app.set("view engine", "handlebars");

const routes = require("./routes");
app.use(routes);

app.listen(3000);