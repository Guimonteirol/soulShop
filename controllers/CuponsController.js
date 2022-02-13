const Cupons = require("../models/Cupons")

class CuponsController{

    static async paginaCupons(req, res){
        let query = {}
        const {nomeCupom, desconto, descricao, validade} = req.query;

        if(nomeCupom){
            query = {name: {$regex: `${nomeCupom}`, $options: "i"  }}
        }

        const cupons = await Cupons.find(query).lean();
        res.render("cupom/cupons", {cupons, nomeCupom});
    }

    static async paginaAdicionarCupom(req, res){
        res.render("cupom/add_cupons");
    }
    
    static async addCupom(req, res){
        const {nomeCupom, desconto, descricao, validade} = req.body;
        const cupom = Cupons({nomeCupom, desconto, descricao, validade})
        await cupom.save()

        res.redirect("/cupons")
    }

    static async paginaEditCupom(req, res){
        const { id } = req.params;
        const cupom = await Cupons.findById(id).lean();
        res.render("cupom/editar_cupons",{cupom})
    }

    static async editCupom(req, res){
        const {id, nomeCupom, desconto, descricao, validade} = req.body;

        await Cupons.findByIdAndUpdate(id, {nomeCupom, desconto, descricao, validade});

        res.redirect("/cupons");

    }

    static async deleteCupons(req, res){
        const { id }= req.body
        await Cupons.findByIdAndDelete(id);
        res.redirect("/cupons");
    }
}

module.exports = CuponsController