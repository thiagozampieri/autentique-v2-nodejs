'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _document = _interopRequireDefault(require("./document"));
var _folder = _interopRequireDefault(require("./folder"));
var _package = _interopRequireDefault(require("../package.json"));
var instance = {
  version: _package.default.version,
  token: null,
  sandbox: false
};
instance.document = (0, _document.default)(instance);
instance.folder = (0, _folder.default)(instance);
var _default = exports.default = instance;