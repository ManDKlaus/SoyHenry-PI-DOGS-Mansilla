const express = require("express");
const router = express.Router();

const { getAllTemperaments } = require("../services/temperaments");

router.get("/", getAllTemperaments);

module.exports = router;