import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilities/Validations';

const UIHeader = props => {
  const {
    title,
    leftIconName = '',
    rightIconName = '',
    onPressLeftIcon,
    onPressRightIcon,
  } = props;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {leftIconName != undefined ? (
        <Icon
          name={leftIconName}
          style={{padding: 10}}
          size={23}
          color={'white'}
          onPress={onPressLeftIcon}
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}></View>
      )}
      <Text
        style={{
          fontSize: fontSizes.h5,
          alignSelf: 'center',
          lineHeight: 50,
          color: 'white',
        }}>
        {title}
      </Text>
      {rightIconName != undefined ? (
        <Icon
          name={rightIconName}
          style={{padding: 10}}
          size={23}
          color={'white'}
          onPress={onPressRightIcon}
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}></View>
      )}
    </View>
  );
};

export default UIHeader;
