const { Router } = require("express");
const CadastroController = require("../controllers/CadastroController");
const router = Router();

router.get('/cadastros' , CadastroController.paginaCadastros);
router.get("/cadastro/novo", CadastroController.paginaCadastro);
router.post("/cadastro/enviar", CadastroController.addCadastro);



module.exports = router;