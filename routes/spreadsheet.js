const express = require("express");
const Spreadsheet = require("../models/Spreadsheet");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, data } = req.body;
  const newSheet = new Spreadsheet({ name, data });
  await newSheet.save();
  res.send(newSheet);
});

router.get("/:id", async (req, res) => {
  const sheet = await Spreadsheet.findById(req.params.id);
  res.send(sheet);
});

module.exports = router;