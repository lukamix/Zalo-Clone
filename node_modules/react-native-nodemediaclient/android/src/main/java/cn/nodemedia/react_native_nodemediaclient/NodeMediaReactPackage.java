//
//  NodeMediaReactPackage.java
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

package cn.nodemedia.react_native_nodemediaclient;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class NodeMediaReactPackage implements ReactPackage{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new RCTNodeMediaClient(reactContext)
        );
    }


    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {

        return Arrays.<ViewManager>asList(
                new NodePlayerViewManager(),
                new NodeCameraViewManager()
        );
    }
}
