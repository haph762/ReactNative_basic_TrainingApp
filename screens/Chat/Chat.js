import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilities/Validations';
import {UIHeader} from '../../components';
import ChatItem from './ChatItem';

const Chat = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: 'phan ha',
      messenger: 'hello hà đây',
      numberOfUnreadMessenger: 2,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/13.jpg',
      name: 'thanh Phong',
      messenger: 'hello hà hihi đây',
      numberOfUnreadMessenger: 12,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/22.jpg',
      name: 'BNguyen tuan',
      messenger: 'hello lai là hà đây',
      numberOfUnreadMessenger: 0,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/43.jpg',
      name: 'pham ha',
      messenger: 'hello hà... tui đây',
      numberOfUnreadMessenger: 2,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'phan ha Nguyen',
      messenger: 'hello hà đây lan72 cuối',
      numberOfUnreadMessenger: 15,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/73.jpg',
      name: 'phan ha Nguyen',
      messenger: 'hello hà đây lan72 cuối',
    },
  ]);
  return (
    <View style={{flexDirection: 'column'}}>
      <UIHeader
        title={'Notifications'}
        leftIconName={'arrow-left'}
        rightIconName={'search'}
        onPressLeftIcon={() => {
          alert('left');
        }}
        onPressRightIcon={() => {
          alert('right');
        }}></UIHeader>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingStart: 10,
        }}>
        <Text style={{color: 'black', fontSize: fontSizes.h6, marginStart: 10}}>
          6 unread messengers
        </Text>
        <Icon
          name={'trash-alt'}
          style={{padding: 10}}
          size={12}
          color={colors.inactive}
          onPress={() => {
            alert('deleted');
          }}
        />
      </View>
      <FlatList
        style={{}}
        data={users}
        renderItem={({item}) => {
          return (
            <ChatItem
              key={item.url}
              user={item}
              onPressName={() => {
                navigate('Messenger', {user: item});
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Chat;
