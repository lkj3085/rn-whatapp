import { StyleSheet, Text, View, FlatList } from "react-native";
import chats from "../assets/data/chats.json";

import ContactListItem from "../components/ContactListItem";

export default function ContactScreen() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={chats}
      renderItem={({ item }) => (
        <ContactListItem
          style={{ backgroundColor: "white" }}
          chat={item}
          user={item.user}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
