import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigation";

export default function App() {
  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 3000);
  // });

  // const chat = {
  //   id: "1",
  //   user: {
  //     image:
  //       "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
  //     name: "Lukas",
  //   },
  //   lastMessage: {
  //     text: "fuck",
  //     createAt: "14:00",
  //   },
  // };

  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
