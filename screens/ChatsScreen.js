import { FlatList, StyleSheet, Text, View } from "react-native";
import chats from "../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

export default function ChatsScreen() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={chats}
      renderItem={({ item }) => (
        <ChatListItem style={{ backgroundColor: "white" }} chat={item} />
      )}
    />
  );
}

const styles = StyleSheet.create({});
