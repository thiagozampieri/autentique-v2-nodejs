'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _create2 = require("./create");
var _listAll2 = require("./listAll");
var _listById2 = require("./listById");
var _deleteById2 = require("./deleteById");
var _signById2 = require("./signById");
var document = def => ({
  create: args => (0, _create2.create)(def, args),
  listAll: args => (0, _listAll2.listAll)(def, args),
  listById: args => (0, _listById2.listById)(def, args),
  deleteById: args => (0, _deleteById2.deleteById)(def, args),
  signById: args => (0, _signById2.signById)(def, args)
});
var _default = exports.default = document;