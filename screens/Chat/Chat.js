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
import {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  child,
  get,
  firebaseDatabaseRef,
  onValue,
} from '../../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  useEffect(() => {
    onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async snapshot => {
      if (snapshot.exists()) {
        let snapshotObj = snapshot.val();
        let stringUser = await AsyncStorage.getItem('user');
        let myUserId = JSON.parse(stringUser).userId;
        setUsers(
          Object.keys(snapshotObj)
            .filter(key => key !== myUserId)
            .map(itemKey => {
              let item = snapshotObj[itemKey];
              return {
                //url default profile
                url: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
                name: item['email'],
                email: item.email,
                accessToken: item.accessToken,
                numberOfUnreadMessenger: 3,
                userId: itemKey,
              };
            }),
        );
      } else {
        console.log('no data');
      }
    });
  }, []);
  const [users, setUsers] = useState([
    // {
    //   url: 'https://randomuser.me/api/portraits/women/23.jpg',
    //   name: 'phan ha',
    //   messenger: 'hello hà đây',
    //   numberOfUnreadMessenger: 2,
    // }
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
        style={{marginBottom: 90}}
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
