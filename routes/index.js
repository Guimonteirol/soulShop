const { Router } = require("express");
const produtosRoutes = require("./produtosRoutes");

const pagamentosRoutes = require("./pagamentoRoutes");
const valePresenteRoutes = require("./valePresenteRoutes");

const router = Router();

router.get("/", (req, res)=>{
    res.render("home");
})

router.use(produtosRoutes);
router.use(pagamentosRoutes);
router.use(valePresenteRoutes);

router.use((req, res, next) =>{
    res.render("404");
})

module.exports = router;