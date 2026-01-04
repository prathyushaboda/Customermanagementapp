const express = require("express");
const db = require("../db/database");
const router = express.Router();

router.get("/:customerId", (req, res) => {
  db.all(
    "SELECT * FROM addresses WHERE customerId=?",
    [req.params.customerId],
    (err, rows) => res.json(rows)
  );
});

module.exports = router;
