const { Router } = require("express");
const produtosRoutes = require("./produtosRoutes");
const pagamentosRoutes = require("./pagamentoRoutes") 
const cuponsRoutes = require("./cuponsRoutes")
const lojasRoutes = require("./lojasRoutes");
const valePresenteRoutes = require("./valePresenteRoutes")

const router = Router();

router.get("/", (req, res)=>{
    res.render("home");
})

router.use(produtosRoutes);
router.use(pagamentosRoutes);
router.use(cuponsRoutes);
router.use(lojasRoutes);
router.use(valePresenteRoutes)

router.use((req, res, next) =>{
    res.render("404");
})

module.exports = router;