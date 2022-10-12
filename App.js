import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello there, I am Abdul Waheed!</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableNativeFeedback onPress={() => console.log("view pressed.")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <TouchableOpacity onPress={() => console.log("Image pressed.")}>
        <Image
          blurRadius={0}
          fadeDuration={1000}
          source={{
            width: 320,
            height: 240,
            uri: "https://loremflickr.com/320/240",
          }}
        />
      </TouchableOpacity>
      <Button
        color="red"
        title="Click-Alert"
        // onPress={() => alert("Butoon Tapped")}
        onPress={() =>
          Alert.alert("my title", "my message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
          ])
        }
      />
      {/* only work on ios. does not work on android, maybe work on anroid in future. */}
      <Button
        color="red"
        title="Click-Prompt"
        // onPress={() => alert("Butoon Tapped")}
        onPress={() =>
          Alert.prompt("my title", "my message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
