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
  const {title} = props;
  return (
    <View style={{height: 60, backgroundColor: colors.primary}}>
      <Text
        style={{
          fontSize: fontSizes.h5,
          alignSelf: 'center',
          lineHeight: 50,
          color: 'white',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default UIHeader;
