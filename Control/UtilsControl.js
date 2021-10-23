//Using Notify
import { ToastAndroid, Platform, AlertIOS } from "react-native";

export function notifyMessage(msg) {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    // return AlertIOS.alert("Foo Title", "My Alert Msg", [
    //   { text: "Foo", onPress: () => console.log("Foo Pressed!") },
    //   { text: "Bar", onPress: () => console.log("Bar Pressed!") },
    // ]);
  }
}
