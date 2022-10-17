import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

export default function App() {
  //console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: landscape ? "100%" : "30%",
          backgroundColor: "dodgerblue",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
