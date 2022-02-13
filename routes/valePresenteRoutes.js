const { Router} = require("express")
const ValePresenteController = require('../controllers/ValePresenteController')
const router = Router();

router.get('/vale_presente', ValePresenteController.paginaValePresente)
router.get('/vales/adicionar',ValePresenteController.adicionarValePresente)
router.post('/vales/enviar',ValePresenteController.enviarValePresente)
router.get('/vales/editar/:id',ValePresenteController.paginaEditValePresente)
router.post('/vales/atualizar',ValePresenteController.editValePresente)
router.post('/vales/deletar',ValePresenteController.deletarValePresente)

module.exports = router;