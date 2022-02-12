const Pagamento = require("../models/Pagamento");

class PagamentoController{

    static async paginaPagamento(req, res){
        let query = {};
        const {nomeP} = req.query;

        const pagamentos = await Pagamento.find(query).lean();
        res.render("pagamentos", {pagamentos, nomeP});
    }

    static async escolherPagamento(req, res){
        res.render('add_pagamento')
    }

    static async addPagamento(req, res){
        const {nomeP} = req.body
        const pagamento = Pagamento({nomeP})
        await pagamento.save();
        
        // const { id } = req.params;
        // const pagamento = await Pagamento.findById(id).lean();
    
        // res.render("pagamentos", { pagamento });

        res.redirect("/pagamentos")
    }

    static async escolhidoPagamento(req, res){
        const {pagamento} = req.body;
        const pagamentos = []
        pagamentos.push({pagamento});
        res.render('pagamentos')

    }

}

module.exports = PagamentoController