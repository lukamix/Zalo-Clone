//
//  NodePlayerViewManager.java
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

package cn.nodemedia.react_native_nodemediaclient;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nullable;

import cn.nodemedia.react_native_nodemediaclient.RCTNodePlayerView;

public class NodePlayerViewManager extends ViewGroupManager<RCTNodePlayerView> {


    private static final int COMMAND_PAUSE_ID = 1;
    private static final String COMMAND_PAUSE_NAME = "pause";
    private static final int COMMAND_START_ID = 2;
    private static final String COMMAND_START_NAME = "start";
    private static final int COMMAND_STOP_ID = 3;
    private static final String COMMAND_STOP_NAME = "stop";


    @Override
    public String getName() {
        return "RCTNodePlayer";
    }

    @Override
    protected RCTNodePlayerView createViewInstance(ThemedReactContext reactContext) {
        RCTNodePlayerView view = new RCTNodePlayerView(reactContext);
        return view;
    }

    @ReactProp(name = "inputUrl")
    public void setInputUrl(RCTNodePlayerView view, @Nullable String inputUrl) {
        view.setInputUrl(inputUrl);
    }

    @ReactProp(name = "bufferTime")
    public void setBufferTime(RCTNodePlayerView view, int bufferTime) {
        view.setBufferTime(bufferTime);
    }
    @ReactProp(name = "maxBufferTime")
    public void setMaxBufferTime(RCTNodePlayerView view, int bufferTime) {
        view.setMaxBufferTime(bufferTime);
    }

    @ReactProp(name = "scaleMode")
    public void setScaleMode(RCTNodePlayerView view, String mode) {
        view.setScaleMode(mode);
    }

    @ReactProp(name = "renderType")
    public void setRenderType(RCTNodePlayerView view, String type) {
        view.setRenderType(type);
    }

    @ReactProp(name = "autoplay")
    public void setAutoPlay(RCTNodePlayerView view, Boolean autoPlay) {
        if(autoPlay) {
            view.autoPlay();
        }
    }

    @ReactProp(name = "cryptoKey")
    public void setCryptoKey(RCTNodePlayerView view, @Nullable String cryptoKey) {
        view.setCryptoKey(cryptoKey);
    }

    @ReactProp(name = "audioEnable")
    public void setAudioEnable(RCTNodePlayerView view, Boolean audioEnable) {
        view.setAudioEnable(audioEnable);
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(
                COMMAND_PAUSE_NAME,COMMAND_PAUSE_ID,
                COMMAND_START_NAME,COMMAND_START_ID,
                COMMAND_STOP_NAME,COMMAND_STOP_ID
        );
    }

    @Override
    public void receiveCommand(RCTNodePlayerView root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case COMMAND_PAUSE_ID:
                root.pause();
                break;
            case COMMAND_START_ID:
                root.start();
                break;
            case COMMAND_STOP_ID:
                root.stop();
                break;
        }
    }
}
