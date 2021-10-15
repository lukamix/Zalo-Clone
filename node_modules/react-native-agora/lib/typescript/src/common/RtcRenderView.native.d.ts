import { Component } from 'react';
import { ViewProps } from 'react-native';
import type { VideoMirrorMode, VideoRenderMode } from './Enums';
/**
 * Properties of the uid.
 */
export interface RtcUidProps {
    /** User ID. */
    uid: number;
}
/**
 * Properties of the SurfaceView.
 */
export interface RtcSurfaceViewProps {
    /**
     * Controls whether the SurfaceView's surface is placed on top of another
     * regular surface view in the window (but still behind the window itself).
     */
    zOrderMediaOverlay?: boolean;
    /**
     * Controls whether the SurfaceView's surface is placed on top of its window.
     */
    zOrderOnTop?: boolean;
    /**
     * The rendering mode of the video view.
     */
    renderMode?: VideoRenderMode;
    /**
     * The unique channel name for the AgoraRTC session in the string format.
     * The string length must be less than 64 bytes. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * **Note**
     * - The default value is the empty string "". Use the default value if the user joins the channel using the [`joinChannel`]{@link RtcEngine.joinChannel} method in the `RtcEngine` class.
     * - If the user joins the channel using the [`joinChannel`]{@link RtcChannel.joinChannel} method in the `RtcChannel` class, set this parameter as the `channelId` of the `RtcChannel` object.
     */
    channelId?: string;
    /** The video mirror mode. */
    mirrorMode?: VideoMirrorMode;
}
/**
 * Properties of the TextureView.
 */
export interface RtcTextureViewProps {
    /**
     * The rendering mode of the video view.
     */
    renderMode?: VideoRenderMode;
    /**
     * The unique channel name for the AgoraRTC session in the string format.
     * The string length must be less than 64 bytes. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * **Note**
     * - The default value is the empty string "". Use the default value if the user joins the channel using the [`joinChannel`]{@link RtcEngine.joinChannel} method in the `RtcEngine` class.
     * - If the user joins the channel using the [`joinChannel`]{@link RtcChannel.joinChannel} method in the `RtcChannel` class, set this parameter as the `channelId` of the `RtcChannel` object.
     */
    channelId?: string;
    /** The video mirror mode. */
    mirrorMode?: VideoMirrorMode;
}
/**
 * @ignore
 */
export declare class RtcSurfaceView extends Component<ViewProps & RtcSurfaceViewProps & RtcUidProps, {}> {
    render(): JSX.Element;
}
/**
 * @ignore
 */
export declare class RtcTextureView extends Component<ViewProps & RtcTextureViewProps & RtcUidProps, {}> {
    render(): JSX.Element;
}
