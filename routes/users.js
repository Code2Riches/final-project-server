var express = require("express");
var router = express.Router();
const { uuid } = require("uuidv4");
const { db } = require("../mongo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
