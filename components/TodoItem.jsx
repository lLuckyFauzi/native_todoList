import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

function TodoItem(props) {
  const { text, onPress, id } = props;
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onPress.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.todoText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#219ebc",
  },
  pressed: {
    opacity: 0.5,
  },
  todoText: {
    color: "white",
    padding: 8,
  },
});
