'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _create2 = require("./create");
var _listAll2 = require("./listAll");
var _listById2 = require("./listById");
var _deleteById2 = require("./deleteById");
var _listDocumentsById2 = require("./listDocumentsById");
var _moveDocumentById2 = require("./moveDocumentById");
var folder = def => ({
  create: args => (0, _create2.create)(def, args),
  listAll: args => (0, _listAll2.listAll)(def, args),
  listById: args => (0, _listById2.listById)(def, args),
  listDocumentsById: args => (0, _listDocumentsById2.listDocumentsById)(def, args),
  moveDocumentById: args => (0, _moveDocumentById2.moveDocumentById)(def, args),
  deleteById: args => (0, _deleteById2.deleteById)(def, args)
});
var _default = exports.default = folder;