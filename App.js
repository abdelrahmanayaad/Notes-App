import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyTabs from './src/navigation/botomTap'
function App(props) {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World !</Text>
    // </View>
<>
<MyTabs/>

</>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
