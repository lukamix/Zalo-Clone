//
//  index.js
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//
import NodeCameraView from './NodeCameraModule';
import NodePlayerView from './NodePlayerModule';
import { NativeModules } from 'react-native';
module.exports = { NodeCameraView, NodePlayerView, NodeMediaClient: NativeModules.NodeMediaClient };