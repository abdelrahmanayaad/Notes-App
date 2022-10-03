import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Input from '../components/Input';
import {styles} from '../styles/HomeScreenStyles';
function HomeScreen(props) {
  const [notes, setNotes] = useState([
    {
      title: 'Movies',
      note: '. Five Feet Apart',
    },
    {
      title: 'Names',
      note: '. Abdelrahman Ayad',
    },
  ]);
  const [note, setNote] = useState('');
  const [filterNotes, setFilterNotes] = useState([...notes]);

  function search(val) {
    if (val) {
      let filterNotes = notes.filter(({title}) =>
        title.trim().toUpperCase().includes(val.trim().toUpperCase()),
      );
      setFilterNotes(filterNotes);
    } else {
      setFilterNotes(notes);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="Search"
            left
            iconName="search"
            onChangeText={val => {
              setNote(val);
              search(val);
            }}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>All Notes</Text>
        </View>
        {filterNotes.map((el, idx) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={idx}
              style={styles.noteView}>
              <Text style={styles.noteTitle}>{el.title}</Text>
              <View style={styles.noteDetailsWrapper}>
                <Text style={styles.noteDetailsText}>{el.note}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
