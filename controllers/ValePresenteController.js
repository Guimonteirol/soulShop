const ValePresente = require('../models/ValePresente')

class ValePresenteController{

    static async paginaValePresente(req,res){
        let query = {};

        const {titulo} = req.query;

        const vale_presente = await ValePresente.find(query).lean();
        res.render("vale_presente", {vale_presente,titulo});
    }

    static async adicionarValePresente(req,res){
        res.render('add_vales')
    }

    static async enviarValePresente(req,res){
        const {titulo,valor,validade} = req.body
        const vale_presente = ValePresente({titulo, valor, validade});
        // await vale_presente.moment().subtract(10,'days').calendar();
        await vale_presente.save();

        res.redirect('/vale_presente')
    }

    static async paginaEditValePresente(req,res){
        const {id} = req.params;
        const vale_presente = await ValePresente.findById(id).lean();
        res.render("editar_vale_presente",{vale_presente})
    }

    static async editValePresente(req,res){
        const {id, titulo,valor,validade} = req.body
        await ValePresente.findByIdAndUpdate(id,{titulo,valor,validade})

        res.redirect('/vale_presente')
    }

    static async deletarValePresente(req,res){
        const {id} = req.body
        await ValePresente.findByIdAndDelete(id);
        res.redirect('/vale_presente')
    }
}

module.exports = ValePresenteController;