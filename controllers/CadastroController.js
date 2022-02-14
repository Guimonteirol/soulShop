const Cadastro = require("../models/Cadastro");

class CadastroController{

    static async paginaCadastros(req,res){
        let query = {};
        const {nomeC} = req.query;

        const cadastros = await Cadastro.find(query).lean();
        res.render("cadastro/cadastros" , {cadastros, nomeC});
    }


    static async paginaCadastro(req,res){
        res.render('cadastro/add_cadastro');
    }

    static async addCadastro(req,res){
        const {name, lastName, email, adress, userName, password, newsletter} = req.body;
        const cadastro = Cadastro({name, lastName, email, adress, userName, password, newsletter});
        await cadastro.save();

        res.redirect("/cadastro")
    }


}

module.exports = CadastroController;