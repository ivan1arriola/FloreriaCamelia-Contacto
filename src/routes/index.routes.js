const { Router } = require("express");
const Consulta = require("../models/Consulta");
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post ("/consulta", async (req, res) => {
    try {
        const newConsulta = new Consulta(req.body);
        const savedConsulta = await newConsulta.save();
        res.json({ message: "Consulta enviada!" , savedConsulta });
    } catch (err) {
        res.status(500).json({ message: "Error al enviar la consulta" });
    }
});

router.get("/consulta", async (req, res) => {
    try {
        const consultas = await Consulta.find().lean();
        res.json(consultas);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener las consultas" });
    }
});


module.exports = router;
