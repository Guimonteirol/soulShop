const { Router } = require("express");
const CadastroController = require("../controllers/CadastroController");
const router = Router();

router.get('/cadastros' , CadastroController.paginaCadastros);
router.get("/cadastros/novo", CadastroController.paginaCadastro);
router.post("/cadastros/enviar", CadastroController.addCadastro);
router.post("/cadastros/deletar", CadastroController.deleteCadastro);


module.exports = router;