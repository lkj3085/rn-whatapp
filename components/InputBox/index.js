import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function InputBox() {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("성공");
    setNewMessage("");
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />

      <TextInput
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
      />

      <MaterialIcons
        style={styles.send}
        name="send"
        size={15}
        color="white"
        onPress={onSend}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 7,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
