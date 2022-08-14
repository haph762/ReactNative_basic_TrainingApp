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
  FlatList,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../utilities/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FoodItem from './FoodItem';
/**
 * listView from a map of objects
 * flatList
 *
 * **/
function FoodList(props) {
  //list of foods  = state
  const [foods, setFoods] = useState([
    {
      name: 'La Casa P',
      status: 'Coming soon',
      price: 112,
      website: 'https://website.com.vn',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
        instagram: 'https://instagram.com/haph762',
      },
      url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
    },
    {
      name: 'day la mon gi do',
      status: 'Opening now',
      price: 112,
      website: 'https://website.com.vn',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
      },
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU',
    },
    {
      name: 'day la mon gi do day la mon gi do day la mon gi do',
      status: 'Closing soon',
      price: 112,
      website: 'https://website.com.vn',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
        facebook: 'https://facebook.com/haph762',
      },
      url: 'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
    },
    {
      name: 'day la mon gi do day la mon gi do day la mon gi do day la mon gi do day la mon gi do',
      status: 'Comping soon',
      price: 112,
      website: 'https://website.com.vn',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
      },
      url: 'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
    },
    {
      name: 'day la mon gi do day la mon gi do',
      status: 'Coming soon',
      price: 100,
      website: 'https://google.com',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
        facebook: 'https://facebook.com/haph762',
      },
      url: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
    },
    {
      name: 'day la mon gi do day la mon gi do ngon',
      status: 'Coming soon',
      price: 13,
      website: 'https://google.com',
      socialNetworks: {
        facebook: 'https://facebook.com/haph762',
      },
    },
    {
      name: 'day la mon gi do ngon',
      status: 'Closing soon',
      price: 112,
      website: 'https://google.com',
      socialNetworks: {
        twitter: 'https://twitter.com/haph762',
        facebook: 'https://facebook.com/haph762',
      },
      url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        {/* <ScrollView>
          {foods.map(eachFood => (
            <FoodItem food={eachFood} key={eachFood.name} />
          ))}
        </ScrollView> */}
        <FlatList
          data={foods}
          renderItem={({item}) => {
            return (
              <FoodItem
                food={item}
                onPressName={() => {
                  alert(`you press item's name : ${item.name}`);
                }}
              />
            );
          }}
          keyExtractor={eachFood => eachFood.name}
        />
      </View>
    </View>
  );
}
export default FoodList;
