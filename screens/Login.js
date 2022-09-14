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
import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  signInWithEmailAndPassword,
} from '../firebase/firebase';

function Login(props) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  //sate for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //sate to store email/password
  const [email, setEmail] = useState('phanha6@gmail.com');
  const [password, setPassword] = useState('123456');
  // disable button login
  const isValidationOK = () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      isValidEmail(email) &&
      isValidPassword(password)
    );
  };
  useEffect(() => {
    // xử lý khi bàn phím hiện lên các button và register now không bị đè lên nhau
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 20,
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
          flex: 35,
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h6}}>
            Email:{' '}
          </Text>
          <TextInput
            value={email}
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            style={{
              color: 'black',
            }}
            keyboardType="email-address"
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
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 15}}>
            {errorEmail}
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h6}}>
            Password:{' '}
          </Text>
          <TextInput
            value={password}
            onChangeText={password => {
              setErrorPassword(
                isValidPassword(password) == true
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setPassword(password);
            }}
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
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 15}}>
            {errorPassword}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 15,
        }}>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => {
            // alert(`email: ${email}, pass: ${password}`);
            // alert(`email: ${email}, pass: ${password}`);
            signInWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                const user = userCredential.user;
                navigate('UITab');
              })
              .catch(err => {
                alert(`cannot sign, error: ${err} `);
              });
          }}
          style={{
            backgroundColor: isValidationOK()
              ? colors.primary
              : colors.inactive,
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
