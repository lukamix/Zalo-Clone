"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _RtcRenderView = require("./common/RtcRenderView.native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The SurfaceView class.
 *
 * @noInheritDoc
 */
class SurfaceView extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_RtcRenderView.RtcSurfaceView, this.props);
  }

}
/**
 * The TextureView class.
 *
 * **Note**
 *
 * TextureView is supported on Android only. iOS does not support TextureView.
 * @noInheritDoc
 */


class TextureView extends _react.Component {
  render() {
    if (_reactNative.Platform.OS === 'ios') throw new Error('TextureView not support for iOS');
    return /*#__PURE__*/_react.default.createElement(_RtcRenderView.RtcTextureView, this.props);
  }

}
/**
 * View for rendering remote video.
 */


var _default = {
  SurfaceView,
  TextureView
};
exports.default = _default;
//# sourceMappingURL=RtcRemoteView.js.map