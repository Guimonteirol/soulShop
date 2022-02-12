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

        res.redirect("/pagamentos")
    }

    static async paginaEditPagamento(req, res){
        const { id } = req.params;
        const pagamento = await Pagamento.findById(id).lean();
        res.render("editar_pagamento",{pagamento})
    }

    static async editPagamento(req, res){
        const {id, nomeP} = req.body;
       
        await Pagamento.findByIdAndUpdate(id, {nomeP});

        res.redirect("/pagamentos");
    }

    static async deletePagamento(req, res){
        const { id }= req.body
        await Pagamento.findByIdAndDelete(id);
        res.redirect("/pagamentos");
    }

}

module.exports = PagamentoController