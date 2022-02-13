const { Router } = require("express");
const LojasController = require("../controllers/lojasController");
const router = Router();

router.get("/lojas", LojasController.paginaLojas);
router.get("/lojas/novo", LojasController.paginaAdicionarLoja);
router.post("/lojas/enviar", LojasController.addLoja);
router.get("/lojas/editar/:id", LojasController.paginaEditLoja);
router.post("/lojas/atualizar", LojasController.editLoja);
router.post("/lojas/deletar", LojasController.deleteLoja);

module.exports = router;