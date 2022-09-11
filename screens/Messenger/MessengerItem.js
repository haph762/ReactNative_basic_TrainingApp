import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {screenWith} from '../../utilities/Device';
function MessengerItem(props) {
  const {onPress} = props;
  const {url, showUrl, isSender, messenger, timestamp} = props.item;
  return (
    <>
      {isSender === false ? (
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              paddingTop: 20,
              paddingStart: 10,
              flexDirection: 'row',
            }}>
            {showUrl ? (
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                  marginRight: 15,
                  marginStart: 10,
                  position: 'relative',
                }}
                source={{
                  uri: url,
                }}
              />
            ) : (
              <View
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                  marginRight: 15,
                  marginStart: 10,
                  position: 'relative',
                }}></View>
            )}
            <View
              style={{
                flexDirection: 'row',
                width: screenWith * 0.7,
                paddingEnd: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontSizes.h6,
                  paddingVertical: 10,
                  backgroundColor: colors.messenger,
                  textAlignVertical: 'center',
                  paddingHorizontal: 7,
                  borderRadius: 10,
                }}>
                {messenger}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        // my messenger
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              paddingTop: 20,
              paddingStart: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: screenWith * 0.7,
                paddingStart: 20,
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontSizes.h6,
                  paddingVertical: 10,
                  backgroundColor: colors.messenger,
                  textAlignVertical: 'center',
                  paddingHorizontal: 7,
                  borderRadius: 10,
                }}>
                {messenger}
              </Text>
            </View>
            {showUrl ? (
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                  marginRight: 15,
                  marginStart: 10,
                  position: 'relative',
                }}
                source={{
                  uri: url,
                }}
              />
            ) : (
              <View
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                  marginRight: 15,
                  marginStart: 10,
                  position: 'relative',
                }}></View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
export default MessengerItem;
