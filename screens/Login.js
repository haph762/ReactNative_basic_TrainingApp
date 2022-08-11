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
function Login(props) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    // xử lý khi bàn phím hiện lên các button và register now không bị đè lên nhau
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          tintColor={colors.primary}
          source={images.computer}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
      </View>
      <View
        style={{
          flex: 25,
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h6}}>
            Email:{' '}
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            placeholder="Example@gmail.com"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 10,
              alignSelf: 'center',
            }}></View>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h6}}>
            Password:{' '}
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            placeholder="Password"
            placeholderTextColor={colors.placeholder}
            secureTextEntry={true}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 10,
              alignSelf: 'center',
            }}></View>
        </View>
      </View>
      <View
        style={{
          flex: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('press login');
          }}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 15,
          }}>
          <Text style={{padding: 8, fontSize: fontSizes.h5}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => {
            alert('press register');
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h6,
              color: colors.primary,
              alignSelf: 'center',
            }}>
            New user? Register now
          </Text>
        </TouchableOpacity>
      </View>
      {keyboardIsShow === false && (
        <View style={{flex: 30}}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                flex: 1,
              }}></View>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h6,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}>
              User other methods ?
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                flex: 1,
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon name="facebook" size={35} color={colors.facebook}></Icon>
            <View style={{width: 15}}></View>
            <Icon name="google" size={35} color={colors.google}></Icon>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
export default Login;
