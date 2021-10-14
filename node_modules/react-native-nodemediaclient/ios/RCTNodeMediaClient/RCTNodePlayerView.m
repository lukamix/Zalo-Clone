//
//  RCTNodePlayerView.m
// 
//
//  Created by Mingliang Chen on 2017/11/29.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

#import "RCTNodeMediaClient.h"
#import "RCTNodePlayerView.h"
#import <NodeMediaClient/NodeMediaClient.h>


@interface RCTNodePlayerView()

@property (strong,nonatomic) NodePlayer *np;

@end

@implementation RCTNodePlayerView

- (id)init {
  self = [super init];
  if(self) {
    _np = [[NodePlayer alloc] initWithLicense:[RCTNodeMediaClient license]];
    [_np setNodePlayerDelegate:self];
    [_np setPlayerView:self];
    _autoplay = NO;
    _audioEnable = YES;
    _inputUrl = nil;
    _onChange = nil;
  }
  return self;
}

-(void) onEventCallback:(nonnull id)sender event:(int)event msg:(nonnull NSString*)msg {
    if (!_onChange) {
        return;
    }
    _onChange(@{@"code": [NSNumber numberWithInteger:event], @"msg": msg});
}

- (void)setInputUrl:(NSString *)inputUrl {
  _inputUrl = inputUrl;
  [_np setInputUrl:inputUrl];
  if(_autoplay) {
    [_np start];
  }
}

-(void)setBufferTime:(int)bufferTime {
  _bufferTime = bufferTime;
  [_np setBufferTime:bufferTime];
}

-(void)setMaxBufferTime:(int)maxBufferTime {
  _maxBufferTime = maxBufferTime;
  [_np setMaxBufferTime:maxBufferTime];
}

-(void)setScaleMode:(NSString *)scaleMode {
  int mode = UIViewContentModeScaleToFill;
  if([scaleMode isEqualToString:@"ScaleAspectFit"]) {
    mode = UIViewContentModeScaleAspectFit;
  } else if([scaleMode isEqualToString:@"ScaleAspectFill"]) {
    mode = UIViewContentModeScaleAspectFill;
  }
  [_np setContentMode:mode];
  
}

- (void)setAutoplay:(BOOL)autoplay {
  _autoplay = autoplay;
  if(_inputUrl) {
    [_np start];
  }
}

- (void)setAudioEnable:(BOOL)audioEnable {
  _audioEnable = audioEnable;
  [_np setAudioEnable:audioEnable];
}

-(void)setCryptoKey:(NSString *)cryptoKey {
  [_np setCryptoKey:cryptoKey];
}

-(int)start {
  return [_np start];
}

-(int)stop {
  return [_np stop];
}

-(int)pause {
  return [_np pause];
}
@end
