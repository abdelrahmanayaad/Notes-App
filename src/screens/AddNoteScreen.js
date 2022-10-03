import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/AddNoteScreenStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../constants/Constants';
function AddNoteScreen(props) {
  const refRBSheet = useRef();
  const [chechbox, setCheckbox] = useState(false);
  const [RBSheetState, setRBSheet] = useState([
    {
      icon: 'list',
      title: 'List',
    },
    {
      icon: 'checkbox-outline',
      title: 'Checkbox',
    },
    {
      icon: 'image-outline',
      title: 'Add image',
    },
    {
      icon: 'trash',
      title: 'Delete note',
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Icon name="ios-arrow-back-outline" style={styles.ArrowIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              onPress={() => {
                refRBSheet.current.open();
              }}
              name="format-list-bulleted-type"
              style={styles.TrashIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleInputWrapper}>
          <TextInput
            placeholderTextColor={COLORS.darkGray}
            placeholder="Title"
            style={styles.title}
            multiline
            maxLength={40}
            numberOfLines={2}
          />
        </View>
        <View style={styles.noteContentWrapper}>
          <TextInput
            placeholderTextColor={COLORS.darkGray}
            placeholder="Type something"
            style={styles.noteContententText}
            multiline
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.plusIconWrapper}>
        <Icon name="add" style={styles.plusIcon} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: RFValue(20),
            borderTopRightRadius: RFValue(20),
            backgroundColor: 'white',
            elevation: 15,
            zIndex: 5,
            justifyContent: 'space-around',
          },
        }}>
        {RBSheetState.map((el, idx) => {
          return (
            <View key={idx} style={styles.RBSheetFormat}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={el.icon} style={styles.RBSheetIcons} />
                <Text style={styles.RBSheetTitles}>{el.title}</Text>
              </TouchableOpacity>
              {idx == 0 ? (
                <TouchableOpacity>
                  <Icon
                    name="ios-chevron-forward"
                    style={styles.RBSheetIcons}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          );
        })}
      </RBSheet>
    </View>
  );
}

export default AddNoteScreen;
