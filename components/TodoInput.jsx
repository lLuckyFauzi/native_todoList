import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function TodoInput(props) {
  const { onPress, open, closeModalHandler } = props;

  const [todo, setTodo] = useState("");

  const todoInputHandler = (text) => {
    setTodo(text);
  };

  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/js.png")}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Todo!</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Type your Todos!"
          onChangeText={todoInputHandler}
          value={todo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Todo"
              color={"#219ebc"}
              onPress={() => {
                onPress(todo);
                setTodo("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"#d62828"}
              title="Cancel"
              onPress={closeModalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#00b4d8",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    width: "100%",
    height: 45,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
