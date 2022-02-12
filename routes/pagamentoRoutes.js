const { Router } = require("express")
const PagamentoController = require('../controllers/PagamentoController')
const router = Router();

router.get('/pagamentos', PagamentoController.paginaPagamento)
router.get('/pagamento', PagamentoController.escolherPagamento)
router.post('/pagamentos/enviar',PagamentoController.addPagamento)
router.get("/pagamento/editar/:id", PagamentoController.paginaEditPagamento);
router.post("/pagamentos/atualizar", PagamentoController.editPagamento);
router.post("/pagamento/deletar", PagamentoController.deletePagamento);


module.exports = router;