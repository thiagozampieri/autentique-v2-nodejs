'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var Api = token => _axios.default.create({
  baseURL: "https://api.autentique.com.br/v2",
  timeout: 1000,
  headers: {
    Authorization: "Bearer ".concat(token || "41e3104da4632d56f8bd6324a8513d8665f8c8465cf9b3ce12b28e1b08c05ec8")
  }
});
var _default = exports.default = Api;