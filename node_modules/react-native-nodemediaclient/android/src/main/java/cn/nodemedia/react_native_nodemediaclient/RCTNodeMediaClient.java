package cn.nodemedia.react_native_nodemediaclient;

/**
 * Created by aliang on 2018/2/28.
 */

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RCTNodeMediaClient extends ReactContextBaseJavaModule {
    private static String mLicense = "";

    public RCTNodeMediaClient(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NodeMediaClient";
    }

    @ReactMethod
    public void setLicense(String license) {
        mLicense = license;
    }

    public static String getLicense() {
        return mLicense;
    }
}
