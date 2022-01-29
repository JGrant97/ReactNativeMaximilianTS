import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'
import { CourseGoal } from "./Models/CourseGoal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(goalTitle: string)
  {
    setCourseGoals(currentGoals => [...courseGoals, {Id: Math.random().toString(), Value: goalTitle}])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        keyExtractor={(item: any, index) => item.Id}
        data={courseGoals} 
        renderItem={itemData => (<GoalItem onDelete={() => console.log("delete")} title={itemData.item.Value}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
