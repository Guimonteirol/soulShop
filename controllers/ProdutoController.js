const Produto = require("../models/Produto")

class ProdutoController{
    static async paginaProdutos(req, res){
        let query = {};
        const {nomeProduto} = req.query;

        if(nomeProduto){
            query = {name: { $regex: `${nomeProduto}`, $options: "i" }};
        }

        const produtos = await Produto.find(query).lean();
        res.render("produtos", {produtos, nomeProduto});
    }

    static async paginaAdicionarProduto(req, res){
        res.render("add_produto");
    }

    static async addProduto(req, res){
        const {name, price, description, quantity} = req.body;
        const produto = Produto({name, price, description, quantity});
        await produto.save(); //solicitação remota ao banco

        res.redirect("/produtos")
    }

    static async paginaEditProduto(req, res){
        const { id } = req.params;
        const produto = await Produto.findById(id).lean();
        res.render("editar_produto",{produto})
    }

    static async editProduto(req, res){
        const {id, name, price, description, quantity} = req.body;

        await Produto.findByIdAndUpdate(id, {name, price, description, quantity});

        res.redirect("/produtos");

    }

    static async deleteProduto(req, res){
        const { id }= req.body
        await Produto.findByIdAndDelete(id);
        res.redirect("/produtos");
    }
}

module.exports = ProdutoController;

//o (req, res) vai ser feito aqui, no módulo de contrrole eu vou chamar a rota com método