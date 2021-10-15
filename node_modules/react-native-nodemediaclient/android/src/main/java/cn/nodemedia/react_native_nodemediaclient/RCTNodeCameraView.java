//
//  RCTNodeCameraView.java
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

package cn.nodemedia.react_native_nodemediaclient;

import android.util.Log;
import android.view.Choreographer;
import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import cn.nodemedia.NodeCameraView;
import cn.nodemedia.NodePublisher;
import cn.nodemedia.NodePublisherDelegate;

public class RCTNodeCameraView extends NodeCameraView implements LifecycleEventListener {
    private NodePublisher mNodePublisher;
    private Boolean isAutoPreview = true;

    private int cameraId = -1;
    private boolean cameraFrontMirror = true;

    private int audioBitrate = 32000;
    private int audioProfile = 0;
    private int audioSamplerate = 44100;

    private int videoPreset = NodePublisher.VIDEO_PPRESET_4X3_480;
    private int videoFPS = 20;
    private int videoBitrate = 400000;
    private int videoProfile = NodePublisher.VIDEO_PROFILE_BASELINE;
    private boolean videoFrontMirror = false;

    private boolean denoise = false;
    private boolean dynamicRateEnable = true;
    private int smoothSkinLevel = 0;


    public RCTNodeCameraView(@NonNull ThemedReactContext context) {
        super(context);
        setupLayoutHack();
        context.addLifecycleEventListener(this);

        mNodePublisher = new NodePublisher(context, RCTNodeMediaClient.getLicense());
        mNodePublisher.setNodePublisherDelegate(new NodePublisherDelegate() {
            @Override
            public void onEventCallback(NodePublisher nodePublisher, int i, String s) {
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

    public void setOutputUrl(String url) {
        mNodePublisher.setOutputUrl(url);
    }

    public void setCryptoKey(String cryptoKey) {
        mNodePublisher.setCryptoKey(cryptoKey);
    }

    public void setCamera(int cameraId, boolean cameraFrontMirror) {
        this.cameraId = cameraId;
        this.cameraFrontMirror = cameraFrontMirror;
        mNodePublisher.setCameraPreview(this, cameraId, cameraFrontMirror);
        if(isAutoPreview) {
            this.startPrev();
        }
    }

    public void setAudio(int audioBitrate, int audioProfile,int audioSamplerate) {
        mNodePublisher.setAudioParam(audioBitrate, audioProfile, audioSamplerate);
    }

    public void setVideo(int videoPreset, int videoFPS, int videoBitrate, int videoProfile, boolean videoFrontMirror ) {
        mNodePublisher.setVideoParam(videoPreset, videoFPS, videoBitrate, videoProfile, videoFrontMirror);
    }

    public void setDenoise(boolean denoise) {
        this.denoise = denoise;
    }

    public void setDynamicRateEnable(boolean dynamicRateEnable) {
        this.dynamicRateEnable = dynamicRateEnable;
        mNodePublisher.setDynamicRateEnable(dynamicRateEnable);
    }

    public void setSmoothSkinLevel(int smoothSkinLevel) {
        this.smoothSkinLevel = smoothSkinLevel;
    }

    public int startPrev() {
        int result = mNodePublisher.startPreview();
        return result;
    }

    public int stopPrev() {
        isAutoPreview = false;
        return mNodePublisher.stopPreview();
    }

    public int start() {
        return mNodePublisher.start();
    }

    public void stop() {
        mNodePublisher.stop();
    }

    public int switchCam() {
        return mNodePublisher.switchCamera();
    }

    public void audioPreview() {
        isAutoPreview = true;
        if(cameraId >=0) {
            this.startPrev();
        }

    }

    @Override
    public void onHostResume() {
    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {
        mNodePublisher.stopPreview();
        mNodePublisher.stop();
    }

    void setupLayoutHack() {
        Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
            @Override
            public void doFrame(long frameTimeNanos) {
                manuallyLayoutChildren();
                getViewTreeObserver().dispatchOnGlobalLayout();
                Choreographer.getInstance().postFrameCallback(this);
            }
        });
    }

    void manuallyLayoutChildren() {
        for (int i = 0; i < getChildCount(); i++) {
            View child = getChildAt(i);
            child.measure(MeasureSpec.makeMeasureSpec(getMeasuredWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getMeasuredHeight(), MeasureSpec.EXACTLY));
            child.layout(0, 0, child.getMeasuredWidth(), child.getMeasuredHeight());
        }
    }
}
