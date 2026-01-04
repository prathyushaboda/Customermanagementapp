const express = require("express");
const db = require("../db/database");
const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM customers", [], (err, rows) => res.json(rows));
});

router.post("/", (req, res) => {
  const { firstName, lastName, phone, city, state, pincode } = req.body;
  db.run(
    "INSERT INTO customers VALUES (NULL,?,?,?,?,?,?)",
    [firstName, lastName, phone, city, state, pincode],
    function () {
      res.json({ message: "Customer added", id: this.lastID });
    }
  );
});

module.exports = router;
