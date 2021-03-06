import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem(props: any) {
  function deleteGoalHandler() {
    props.onDelete(props.id);
  }

  return (
    <TouchableOpacity onPress={deleteGoalHandler}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
