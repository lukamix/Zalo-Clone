import React, { Component } from 'react';
import { Platform } from 'react-native';
import { RtcSurfaceView, RtcTextureView } from './common/RtcRenderView.native';
/**
 * The SurfaceView class.
 *
 * @noInheritDoc
 */

class SurfaceView extends Component {
  render() {
    return /*#__PURE__*/React.createElement(RtcSurfaceView, this.props);
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


class TextureView extends Component {
  render() {
    if (Platform.OS === 'ios') throw new Error('TextureView not support for iOS');
    return /*#__PURE__*/React.createElement(RtcTextureView, this.props);
  }

}
/**
 * View for rendering remote video.
 */


export default {
  SurfaceView,
  TextureView
};
//# sourceMappingURL=RtcRemoteView.js.map