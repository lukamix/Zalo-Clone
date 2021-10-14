//
//  RCTNodePlayerManager.m
//  
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//
#import <React/RCTViewManager.h>
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import "RCTNodePlayerView.h"

@interface RCTNodePlayerManager : RCTViewManager
@end

@implementation RCTNodePlayerManager
RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[RCTNodePlayerView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(inputUrl, NSString)
RCT_EXPORT_VIEW_PROPERTY(bufferTime, int)
RCT_EXPORT_VIEW_PROPERTY(maxBufferTime, int)
RCT_EXPORT_VIEW_PROPERTY(autoplay, BOOL)
RCT_EXPORT_VIEW_PROPERTY(audioEnable, BOOL)
RCT_EXPORT_VIEW_PROPERTY(scaleMode, NSString)
RCT_EXPORT_VIEW_PROPERTY(cryptoKey, NSString)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

RCT_EXPORT_METHOD(start:(nonnull NSNumber *)reactTag)
{
  
  [self.bridge.uiManager addUIBlock:
   ^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, RCTNodePlayerView *> *viewRegistry){
     RCTNodePlayerView *view = viewRegistry[reactTag];
     [view start];
   }];
}

RCT_EXPORT_METHOD(stop:(nonnull NSNumber *)reactTag)
{
  
  [self.bridge.uiManager addUIBlock:
   ^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, RCTNodePlayerView *> *viewRegistry){
     RCTNodePlayerView *view = viewRegistry[reactTag];
     [view stop];
   }];
}

RCT_EXPORT_METHOD(pause:(nonnull NSNumber *)reactTag)
{
  
  [self.bridge.uiManager addUIBlock:
   ^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, RCTNodePlayerView *> *viewRegistry){
     RCTNodePlayerView *view = viewRegistry[reactTag];
     [view pause];
   }];
}
@end
