const { Router } = require("express")
const PagamentoController = require('../controllers/PagamentoController')
const router = Router();

router.get('/pagamentos', PagamentoController.paginaPagamento)
router.get('/pagamento', PagamentoController.escolherPagamento)
router.post('/pagamentos/enviar',PagamentoController.addPagamento)
// router.get('/pagamentos', PagamentoController.escolhidoPagamento)

module.exports = router;