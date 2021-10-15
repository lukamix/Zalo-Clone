require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name           = 'react-native-nodemediaclient'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.author         = package['author']
  s.homepage       = 'https://github.com/NodeMedia/react-native-nodemediaclient'
  s.source       = { :git => "https://github.com/NodeMedia/react-native-nodemediaclient.git", :tag => "master" }

  s.ios.deployment_target = "8.0"

  s.subspec "RCTNodeMediaClient" do |ss|
    ss.source_files  = "ios/RCTNodeMediaClient/*.{h,m}"
    s.static_framework = true
  end

  s.dependency "React"

  s.dependency "NodeMediaClient", '2.9.6'

  s.default_subspec = "RCTNodeMediaClient"
end
