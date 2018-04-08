// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(cb) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cd(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete;("burger", condition, function(res) {
      cd(res);
    })
  }
};

//Export database functions for controller (burger_controller.js)
module.exports = cat;