//
//  RCTNodePlayerView.java
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

package cn.nodemedia.react_native_nodemediaclient;

import android.util.AttributeSet;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import cn.nodemedia.NodePlayer;
import cn.nodemedia.NodePlayerDelegate;
import cn.nodemedia.NodePlayerView;

public class RCTNodePlayerView extends NodePlayerView implements LifecycleEventListener {
    private NodePlayer mNodePlayer;
    private Boolean isAutoPlay = false;

    public RCTNodePlayerView(ThemedReactContext context) {
        super(context);
        context.addLifecycleEventListener(this);
        mNodePlayer = new NodePlayer(context, RCTNodeMediaClient.getLicense());
        mNodePlayer.setPlayerView(this);
        mNodePlayer.setNodePlayerDelegate(new NodePlayerDelegate() {
            @Override
            public void onEventCallback(NodePlayer nodePlayer, int i, String s) {
                WritableMap event = Arguments.createMap();
                event.putInt("code", i);
                event.putString("msg", s);
                ReactContext reactContext = (ReactContext) getContext();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        getId(),
                        "topChange",
                        event);

            }
        });
    }

    public void setInputUrl(String inputUrl) {
        mNodePlayer.setInputUrl(inputUrl);
        if(isAutoPlay) {
            start();
        }
    }

    public void setBufferTime(int bufferTime) {
        mNodePlayer.setBufferTime(bufferTime);
    }

    public void setMaxBufferTime(int maxBufferTime) {
        mNodePlayer.setMaxBufferTime(maxBufferTime);
    }

    public void setScaleMode(String smode) {
        NodePlayerView.UIViewContentMode mode = NodePlayerView.UIViewContentMode.valueOf(smode);
        setUIViewContentMode(mode);
    }

    public void setRenderType(String stype) {
        NodePlayerView.RenderType type =  NodePlayerView.RenderType.valueOf(stype);
        setRenderType(type);
    }

    public void setCryptoKey(String key) {
        mNodePlayer.setCryptoKey(key);
    }

    public void setAudioEnable(Boolean audioEnable){
        mNodePlayer.setAudioEnable(audioEnable);
    }

    public int pause() {
        return mNodePlayer.pause();
    }

    public int start() {
        return mNodePlayer.start();
    }

    public int stop() {
        return mNodePlayer.stop();
    }

    public void release(){
        mNodePlayer.release();
    }

    public void autoPlay() {
        isAutoPlay = true;
        start();
    }

    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {
        stop();
        release();
    }
}
