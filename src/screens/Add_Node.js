import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Add_Node(props) {
  return (
    <View style={styles.container}>
      <Text>Hello World !</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Add_Node;
