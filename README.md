Steps to reproduce this repo:

```
react-native init reactNativeMapsExample
cd reactNativeMapsExample
yarn install
react-native run-android

**Few points**

Make sure you have the latest version of Android Studio 

run the following to update bash file

`
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools
`
restart the  terminal

in Android studio create an emulator profile for Nougat (v7.1.1), 5 inch screen, 1280 x 720px, 2Gb ram

you can fire up your emulator from terminal 

run  `~/Library/Android/sdk/tools/emulator -list-avds
`
run `~/Library/Android/sdk/tools/emulator @NAME_OF_IMAGE
`
once that is running you can run react-native run-android


Notes

Make sre airplane mode is off

Might have to do this: 

Debugging might go to the wrong address 10.0.2.2: 

make sure no debugger tabs (localhost:8081) are open

`CMD + M`, dev settings, change host to localhost:8081

rereun android app `react-native run`

```

