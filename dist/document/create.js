'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = _interopRequireDefault(require("fs"));
var _axios = _interopRequireDefault(require("axios"));
var _formData = _interopRequireDefault(require("form-data"));
var _Api = _interopRequireDefault(require("../common/Api"));
var _utils = _interopRequireDefault(require("../common/utils"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var create = exports.create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (_ref, _ref2) {
    var {
      token,
      sandbox = false
    } = _ref;
    var {
      document,
      signers,
      filename: originalFilename,
      file,
      fileUrl,
      organizationId,
      folderId
    } = _ref2;
    try {
      var variables = {
        document: _objectSpread(_objectSpread({}, document), {}, {
          name: document.name.substring(0, 199)
        }),
        signers,
        file: null,
        organizationId,
        folderId
      };
      var filename = "".concat(__dirname, "/../resources/documents/create.graphql");
      var operations = _fs.default.readFileSync(filename).toString().replace(/[\n\r]/gi, '').replace('$variables', JSON.stringify(variables)).replace('$sandbox', sandbox.toString());
      var buffer = file;
      if (fileUrl) {
        var _response = yield _axios.default.get(fileUrl, {
          responseType: 'arraybuffer'
        });
        buffer = Buffer.from(_response.data);
      }
      var formData = new _formData.default();
      formData.append('operations', _utils.default.query(operations));
      formData.append('map', '{"file": ["variables.file"]}');
      formData.append('file', buffer, {
        filename: originalFilename,
        contentType: 'application/octet-stream',
        mimeType: 'application/octet-stream'
      });
      var response = yield (0, _Api.default)(token).post('/graphql', formData, {
        processData: false,
        withCredentials: true,
        cache: false,
        timeout: 180000,
        headers: _objectSpread(_objectSpread({}, formData.getHeaders()), {}, {
          enctype: 'multipart/form-data',
          'content-type': "multipart/form-data; boundary=".concat(formData._boundary),
          Accept: 'application/json'
        })
      });
      return response && response.data;
    } catch (error) {
      console.error(error);
    }
  });
  return function create(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();