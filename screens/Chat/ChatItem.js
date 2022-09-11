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
import {images, color, fontSizes, icons, colors} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ChatItem(props) {
  let {name, url, messenger, numberOfUnreadMessenger} = props.user; // destructuring an object
  const {onPressName} = props;
  return (
    <TouchableOpacity onPress={onPressName}>
      <View
        style={{
          height: 80,
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'cover',
              borderRadius: 25,
              marginRight: 15,
              marginStart: 10,
              position: 'relative',
            }}
            source={{
              uri: url,
            }}
          />
          {numberOfUnreadMessenger > 0 && (
            <Text
              style={{
                color: 'white',
                backgroundColor: 'red',
                position: 'absolute',
                right: 10,
                top: -4,
                fontSize: fontSizes.h6 * 0.8,
                borderRadius: 10,
                paddingHorizontal: numberOfUnreadMessenger > 9 ? 2 : 4,
              }}>
              {numberOfUnreadMessenger}
            </Text>
          )}
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{name}</Text>
          <Text style={{color: colors.inactive}}>{messenger}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 5,
          }}>
          <Text style={{color: colors.inactive}}>4 minutes ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ChatItem;
