const express = require("express");
const router = express.Router();
const { getProyecto } = require('../controllers/Proyecto');


// obtener todos los proyectos
router.get("/", getProyecto );


module.exports = router;