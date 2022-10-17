import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //main
        alignItems: "center", //secondary
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignSelf: "flex-start",
          // flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
          // flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          // flex: 1,
        }}
      />
    </View>
  );
}
