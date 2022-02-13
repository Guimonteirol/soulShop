const { Router } = require("express")
const CuponsController = require('../controllers/CuponsController')
const router = Router()

router.get('/cupons', CuponsController.paginaCupons);

router.get('/cupons/novo', CuponsController.paginaAdicionarCupom);
router.post('/cupons/enviar', CuponsController.addCupom);
router.get("/cupons/editar/:id", CuponsController.paginaEditCupom);
router.post("/cupons/atualizar", CuponsController.editCupom);
router.post("/cupons/deletar", CuponsController.deleteCupons);



module.exports = router