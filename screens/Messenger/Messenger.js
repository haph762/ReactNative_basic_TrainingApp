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
import MessengerItem from './MessengerItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  firebaseDatabase,
  firebaseDatabaseRef,
  firebaseSet,
  onValue,
} from '../../firebase/firebase';

const Messenger = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  let {name, url, userId, ...tmp} = props.route.params.user;
  const [typeText, setTypeText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/38.jpg',
      showUrl: true,
      isSender: true,
      messenger: 'hello',
      timestamp: 1662900811,
    },
  ]);
  useEffect(() => {
    const unsubscribe = onValue(
      firebaseDatabaseRef(firebaseDatabase, 'chats'),
      async snapshot => {
        if (snapshot.exists()) {
          let snapshotObj = snapshot.val();
          let stringUser = await AsyncStorage.getItem('user');
          let myUserId = JSON.parse(stringUser).userId;
          let chatHistoryTmp = Object.keys(snapshotObj)
            .filter(item => item.includes(myUserId))
            .map(itemKey => {
              return {
                ...snapshotObj[itemKey],
                isSender: itemKey.split('-')[0] == myUserId,
                url: 'https://randomuser.me/api/portraits/men/38.jpg',
              };
            })
            .sort((item1, item2) => item1.timestamp - item2.timestamp);
          for (let i = 0; i < chatHistoryTmp.length; i++) {
            let item = chatHistoryTmp[i];
            item.showUrl =
              i == 0 ? true : item.isSender != chatHistoryTmp[i].isSender;
          }
          setChatHistory(chatHistoryTmp);
        } else {
          console.log('no data');
        }
      },
    );
    return () => {
      unsubscribe;
    };
  }, []);
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <UIHeader
        title={name}
        leftIconName={'arrow-left'}
        rightIconName={'ellipsis-v'}
        onPressLeftIcon={() => {
          goBack('Chat');
        }}
        onPressRightIcon={() => {
          alert('right');
        }}></UIHeader>
      <FlatList
        style={{flex: 1}}
        data={chatHistory}
        renderItem={({item}) => {
          return (
            <MessengerItem
              key={item.timestamp}
              onPress={() => {
                alert(`you press item's name :  ${item.messenger}`);
              }}
              item={item}
            />
          );
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={typeText}
          onChangeText={typeText => {
            setTypeText(typeText);
          }}
          style={{
            color: 'black',
            paddingStart: 10,
          }}
          placeholder="Enter your message here"
          placeholderTextColor={colors.placeholder}
        />
        <TouchableOpacity
          onPress={async () => {
            if (typeText.length == 0) {
              return;
            }
            let stringUser = await AsyncStorage.getItem('user');
            let myUserId = JSON.parse(stringUser).userId;
            let myFriendUserId = props.route.params.user.userId;
            let newMessengerObject = {
              url: 'https://randomuser.me/api/portraits/men/38.jpg',
              showUrl: false,
              messenger: typeText,
              timestamp: new Date().getTime(),
            };
            Keyboard.dismiss();
            firebaseSet(
              firebaseDatabaseRef(
                firebaseDatabase,
                `chats/${myUserId}-${myFriendUserId}`,
              ),
              newMessengerObject,
            ).then(() => {
              setTypeText('');
            });
          }}>
          <Icon
            name="paper-plane"
            style={{padding: 10}}
            size={25}
            color={colors.primary}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messenger;
