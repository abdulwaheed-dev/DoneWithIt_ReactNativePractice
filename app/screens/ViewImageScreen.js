import React from "react";
import { Image, View, StyleSheet } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.logoutIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  logoutIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  imageStyle: { width: "100%", height: "100%" },
});
