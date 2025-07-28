'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listDocumentsById = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = _interopRequireDefault(require("fs"));
var _Api = _interopRequireDefault(require("../common/Api"));
var _utils = _interopRequireDefault(require("../common/utils"));
var listDocumentsById = exports.listDocumentsById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (_ref, _ref2) {
    var {
      token,
      sandbox
    } = _ref;
    var {
      folderId
    } = _ref2;
    try {
      var filename = "".concat(__dirname, "/../resources/folders/listDocumentsById.graphql");
      var operations = _fs.default.readFileSync(filename).toString().replace(/[\n\r]/gi, '').replace('$folderId', folderId).replace('$sandbox', sandbox.toString());
      var formData = _utils.default.query(operations);
      var response = yield (0, _Api.default)(token).post('/graphql', formData, {
        processData: false,
        withCredentials: true,
        cache: false,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response && response.data;
    } catch (error) {
      console.error(error);
    }
  });
  return function listDocumentsById(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();