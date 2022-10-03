import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICONS} from '../constants/Constants';

function Input(props) {
  const {right, left, iconName, ...rest} = props;
  return (
    <View
      style={{
        height: RFValue(40),
        backgroundColor: '#eee',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        paddingHorizontal: RFValue(5),
      }}>
      {left && (
        <Icon name={iconName} style={{fontSize: ICONS.icon3, color: '#000'}} />
      )}
      <TextInput
        {...rest}
        style={{
          flex: 1,
          fontSize: RFValue(14),
          color: '#000',
        }}
      />
      {right && (
        <Icon name={iconName} style={{fontSize: ICONS.icon3, color: '#aaa'}} />
      )}
    </View>
  );
}

export default Input;
