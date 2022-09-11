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

const Messenger = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  let {name, url, ...tmp} = props.route.params.user;
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/38.jpg',
      showUrl: true,
      isSender: true,
      messenger: 'hello',
      timestamp: 1662900811,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/83.jpg',
      showUrl: true,
      isSender: false,
      messenger: 'how are you',
      timestamp: 1662900875,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/83.jpg',
      showUrl: false,
      isSender: false,
      messenger: 'hello 2 bạn nhé, ban là ai thế',
      timestamp: 1662900831,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/38.jpg',
      showUrl: true,
      isSender: true,
      messenger:
        'how about your work bye bye tam biet ban nhe, mai minh phai di la nen ngủ sớm nè',
      timestamp: 1662900711,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/83.jpg',
      showUrl: true,
      isSender: false,
      messenger:
        'bye bye tam biet ban nhe, mai minh phai di la nen ngủ sớm nè ',
      timestamp: 1662900819,
    },
  ]);
  return (
    <View style={{flexDirection: 'column'}}>
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
      {/* <View
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
      </View> */}
      <FlatList
        style={{}}
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
    </View>
  );
};

export default Messenger;
