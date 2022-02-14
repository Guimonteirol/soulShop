const { Router } = require("express")
const CuponsController = require('../controllers/CuponsController')
const router = Router()
// abrir a página de cupons // renderiza a página de cupons
router.get('/cupons', CuponsController.paginaCupons);
// redireciona para a página de adicionar cupom
router.get('/cupons/novo', CuponsController.paginaAdicionarCupom);
// vai receber os parâmetros de add cupons, responsável por criar o objeto
router.post('/cupons/enviar', CuponsController.addCupom);
// o id identifica o input que vai modificar
// renderiza a página
router.get("/cupons/editar/:id", CuponsController.paginaEditCupom);
// está ligado ao editar
router.post("/cupons/atualizar", CuponsController.editCupom);
// responsável por deletar, ela irá deletar o objeto pelo id
router.post("/cupons/deletar", CuponsController.deleteCupons);



module.exports = router