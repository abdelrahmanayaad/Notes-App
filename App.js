import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from './src/components/Input';
import HomeScreen from './src/screens/HomeScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import MyTabs from './src/navigation/botomTap';

function App(props) {
  return (
    <>
      <MyTabs />
    </>

  );
}


export default App;
