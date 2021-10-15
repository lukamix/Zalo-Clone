"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RtcChannel: true,
  RtcLocalView: true,
  RtcRemoteView: true
};
Object.defineProperty(exports, "RtcChannel", {
  enumerable: true,
  get: function () {
    return _RtcChannel.default;
  }
});
Object.defineProperty(exports, "RtcLocalView", {
  enumerable: true,
  get: function () {
    return _RtcLocalView.default;
  }
});
Object.defineProperty(exports, "RtcRemoteView", {
  enumerable: true,
  get: function () {
    return _RtcRemoteView.default;
  }
});
exports.default = void 0;

var _RtcEngine = _interopRequireDefault(require("./common/RtcEngine.native"));

var _RtcChannel = _interopRequireDefault(require("./common/RtcChannel.native"));

var _RtcLocalView = _interopRequireDefault(require("./RtcLocalView"));

var _RtcRemoteView = _interopRequireDefault(require("./RtcRemoteView"));

var _Types = require("./Types");

Object.keys(_Types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _RtcEngine.default;
exports.default = _default;
//# sourceMappingURL=index.js.map