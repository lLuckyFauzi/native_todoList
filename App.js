import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [open, setOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const addTodoHandler = (todo) => {
    setTodoList((prev) => [
      ...prev,
      { text: todo, id: Math.random().toString() },
    ]);
    closeModalHandler();
  };

  const deleteTodoHandler = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new todo"
        color={"#219ebc"}
        onPress={openModalHandler}
      />
      <TodoInput
        onPress={addTodoHandler}
        open={open}
        closeModalHandler={closeModalHandler}
      />
      <View style={styles.todoContainer}>
        {/* better than scroll view */}
        <FlatList
          data={todoList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <TodoItem
                id={itemData.item.id}
                text={itemData.item.text}
                onPress={deleteTodoHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  todoContainer: {
    flex: 4,
    marginTop: 50,
  },
});
