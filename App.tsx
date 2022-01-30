import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { CourseGoal } from "./Models/CourseGoal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler(goalTitle: string) {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { Id: Math.random().toString(), Value: goalTitle },
    ]);

    setIsAddMode(false);
  }

  function removeGoalHandler(goalId: string) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.Id !== goalId);
    });
  }

  function cancelAddGoalHandler() {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <FlatList
        keyExtractor={(item: any, index) => item.Id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.Id}
            onDelete={removeGoalHandler}
            title={itemData.item.Value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
