const Cadastro = require("../models/Cadastro");
const Produto = require("../models/Produto");

class CadastroController{

    static async paginaCadastros(req,res){
        let query = {};
        const {nomeC} = req.query;

        
        if(nomeC){
            query = {userName: { $regex: `${nomeC}`, $options: "i" }};
        }

        const cadastros = await Cadastro.find(query).lean();
        res.render("cadastro/cadastros" , {cadastros, nomeC});
    }


    static async paginaCadastro(req,res){
        res.render('cadastro/add_cadastro');
    }

    static async addCadastro(req,res){
        const {name, lastName, email, adress, userName, password} = req.body;

        let newsletter = req.body.newsletter;
        if(newsletter == "on"){
            newsletter = true
        }else{
            newsletter = false
        }

        const  cadastro = Cadastro({name, lastName, email, adress, userName, password, newsletter});
        await cadastro.save();
        res.redirect("/cadastros")
    }

    static async deleteCadastro(req,res){
        const {id} = req.body
        await Cadastro.findByIdAndDelete(id);
        res.redirect("/cadastros");
    }

}

module.exports = CadastroController;