import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Switch,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilities/Validations';
import {UIHeader} from '../components';

const Settings = () => {
  const [isEnableLockApp, setIsEnableLockApp] = useState(true);
  const [isUseFingerprint, setIsUseFingerprint] = useState(false);
  const [isEnabledChangePassword, setIsEnabledChangePassword] = useState(true);
  return (
    <View style={{flex: 1}}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        {/*________ Menu common */}
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'red', paddingStart: 10, fontSize: fontSizes.h6}}>
            Common
          </Text>
        </View>
        {/* language */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="globe"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Language
          </Text>
          <View style={{flex: 1}}></View>
          <Text
            style={{
              color: 'black',
              paddingEnd: 10,
              fontSize: fontSizes.h6,
              opacity: 0.6,
            }}>
            English
          </Text>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* environment */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="city"
            color="black"
            size={18}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Environment
          </Text>
          <View style={{flex: 1}}></View>
          <Text
            style={{
              color: 'black',
              paddingEnd: 10,
              fontSize: fontSizes.h6,
              opacity: 0.6,
            }}>
            Production
          </Text>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* ________ Menu account */}
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'red', paddingStart: 10, fontSize: fontSizes.h6}}>
            Account
          </Text>
        </View>
        {/* phone number */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="phone"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Phone number
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* Email */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="envelope"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Email
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* sing out */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="sign-out-alt"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Sing out
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* ________ Menu security */}
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'red', paddingStart: 10, fontSize: fontSizes.h6}}>
            Security
          </Text>
        </View>
        {/* lock app */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="lock"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Lock app in background
          </Text>
          <View style={{flex: 1}}></View>
          <Switch
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={isEnableLockApp ? colors.primary : colors.inactive}
            onValueChange={() => {
              setIsEnableLockApp(!isEnableLockApp);
            }}
            value={isEnableLockApp}
            style={{marginEnd: 10}}
          />
        </View>
        {/* fingerprint */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="fingerprint"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Use fingerprint
          </Text>
          <View style={{flex: 1}}></View>
          <Switch
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
            onValueChange={() => {
              setIsUseFingerprint(!isUseFingerprint);
            }}
            value={isUseFingerprint}
            style={{marginEnd: 10}}
          />
        </View>
        {/* change password */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="key"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Change password
          </Text>
          <View style={{flex: 1}}></View>
          <Switch
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={
              isEnabledChangePassword ? colors.primary : colors.inactive
            }
            onValueChange={() => {
              setIsEnabledChangePassword(!isEnabledChangePassword);
            }}
            value={isEnabledChangePassword}
            style={{marginEnd: 10}}
          />
        </View>
        {/* ________ Menu Misc */}
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'red', paddingStart: 10, fontSize: fontSizes.h6}}>
            Misc
          </Text>
        </View>
        {/* term of service */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="headset"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Term of Service
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
        {/* open source license */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            name="h-square"
            color="black"
            size={20}
            style={{
              paddingStart: 10,
            }}
          />
          <Text
            style={{color: 'black', paddingStart: 10, fontSize: fontSizes.h6}}>
            Open source license
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name="chevron-circle-right"
            color="black"
            size={20}
            style={{
              paddingEnd: 10,
              opacity: 0.6,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
