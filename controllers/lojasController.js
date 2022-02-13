const Loja = require("../models/Loja");

class LojasController{
  static async paginaLojas(req, res) {
    let query = {};
    const lojas = await Loja.find(query).lean();
    res.render("lojas/lojas", { lojas });
  }

  static async paginaAdicionarLoja(req, res) {
    res.render("lojas/add_loja");
  }

  static async addLoja(req, res) {
    const { name, address, employees } = req.body;
    const loja = Loja({ name, address, employees });
    await loja.save();

    res.redirect("/lojas");
  }

  static async paginaEditLoja(req,res) {
    const { id } = req.params;
    const loja = await Loja.findById(id).lean();

    res.render("lojas/editar_loja", { loja });
  }

  static async editLoja(req,res) {
    const { id, name, address, employees } = req.body
    await Loja.findByIdAndUpdate(id, {name, address, employees})

    res.redirect("/lojas")
  }

  static async deleteLoja(req,res) {
    const {id} = req.body
    await Loja.findByIdAndDelete(id)
    res.redirect("/lojas")
  }
}

module.exports = LojasController;