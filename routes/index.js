const { Router } = require("express");
const produtosRoutes = require("./produtosRoutes");

const pagamentosRoutes = require("./pagamentoRoutes") 

const router = Router();

router.get("/", (req, res)=>{
    res.render("home");
})

router.use(produtosRoutes);
router.use(pagamentosRoutes);

router.use((req, res, next) =>{
    res.render("404");
})

module.exports = router;