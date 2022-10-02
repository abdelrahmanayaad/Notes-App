import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from './src/components/Input';
import HomeScreen from './src/screens/HomeScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';

function App(props) {
  return (
    <>
      <AddNoteScreen />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
