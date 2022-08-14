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
function _getColorFromStatus(status) {
  if (status?.toLowerCase().trim() == 'opening now') return colors.success;
  else if (status?.toLowerCase().trim() == 'closing soon') return colors.alert;
  else if (status?.toLowerCase().trim() == 'comping soon')
    return colors.warning;
  else return colors.success;
}
function FoodItem(props) {
  let {name, price, socialNetworks, status, url, website} = props.food; // destructuring an object
  const {onPressName} = props; // gọi hàm onPress duoc truyền vào
  //   let {twitter, facebook, instagram} = socialNetworks;
  // có thể destructuring để lấy ra các dối tượng trong mảng như này và check các icon
  debugger;
  return (
    <TouchableOpacity onPress={onPressName}>
      <View
        style={{
          height: 150,
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{
            uri: url,
          }}></Image>
        <View style={{flex: 1, marginRight: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h6,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              width: '100%',
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: colors.inactive,
                fontSize: fontSizes.h6,
              }}>
              {' '}
              Status:
            </Text>
            <Text
              style={{
                color: _getColorFromStatus(status),
                fontSize: fontSizes.h6,
              }}>
              {status.toUpperCase()}
            </Text>
          </View>
          <Text
            style={{
              color: colors.inactive,
              fontSize: fontSizes.h6,
            }}>
            {' '}
            Price: {price} $
          </Text>
          <Text
            style={{
              color: colors.inactive,
              fontSize: fontSizes.h6,
            }}>
            {' '}
            Food Type: Pizza
          </Text>
          <Text
            style={{
              color: colors.inactive,
              fontSize: fontSizes.h6,
            }}>
            {' '}
            Website: {website}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {socialNetworks['facebook'] == undefined ? (
              <Text></Text>
            ) : (
              <Icon
                name="facebook"
                size={15}
                color={colors.inactive}
                style={{paddingEnd: 5}}></Icon>
            )}
            {socialNetworks['twitter'] == undefined ? (
              <Text></Text>
            ) : (
              <Icon
                name="twitter"
                size={15}
                color={colors.inactive}
                style={{paddingEnd: 5}}></Icon>
            )}
            {socialNetworks['instagram'] == undefined ? (
              <Text></Text>
            ) : (
              <Icon name="instagram" size={15} color={colors.inactive}></Icon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
