const { Router } = require("express")
const CuponsController = require('../controllers/CuponsController')
const router = Router()

router.get('/cupons', CuponsController.paginaCupons)
router.get('/cupons/novo', CuponsController.paginaAdicionarCupom)
router.post('/cupons/enviar', CuponsController.addCupom)



module.exports = router