var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database function
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
  console.log(hbsObject);
  res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  cat.create([
    /// WHAT GOES IN HERE?
  ], [
    req.body//? WHAT GOES HERE?
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertID});
  });
});

