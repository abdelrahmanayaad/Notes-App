import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICONS} from '../constants/Constants';
import {styles} from '../styles/AddNoteScreenStyles';
function AddNoteScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
          <Icon name="ios-arrow-back-outline" style={styles.ArrowIconStyle} />
          <Icon name="trash" style={styles.TrashIconStyle} />
        </View>
        <View style={styles.titleInputWrapper}>
          <TextInput
            placeholder="Title"
            style={styles.title}
            multiline
            maxLength={40}
            numberOfLines={2}
          />
        </View>
        <View style={styles.noteContentWrapper}>
          <TextInput
            style={styles.noteContententText}
            placeholder="Type something"
            multiline
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default AddNoteScreen;
