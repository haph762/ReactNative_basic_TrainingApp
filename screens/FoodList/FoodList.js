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
  Alert,
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
  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://res.edu.vn/wp-content/uploads/2021/12/unit-46-topic-food.jpeg',
    },
    {
      name: 'Cam',
      url: 'https://img.freepik.com/premium-vector/fast-food-illustration-set_121223-1482.jpg?w=2000',
    },
    {
      name: 'Nướng',
      url: 'https://hoclaixecaptoc.com/wp-content/uploads/2018/11/food-l%C3%A0-g%C3%AC.jpg',
    },
    {
      name: 'Soup',
      url: 'https://images.foody.vn/res/g79/789740/prof/s576x330/foody-upload-api-foody-mobile-3-201001095345.jpg',
    },
    {
      name: 'Muối',
      url: 'https://cdn.concung.com/2021/10/47957-76007-large_mobile/chao-bo-duong-bo-cau-yen-mach-hat-sen-240gr.jpg',
    },
    {
      name: 'Combo 2',
      url: 'https://images.foody.vn/res/g102/1011759/prof/s576x330/foody-upload-api-foody-mobile-180-200311140430.jpg',
    },
    {
      name: 'Combo',
      url: 'https://images.foody.vn/res/g102/1011759/s800/foody-hawa-s-food-ga-ran-han-quoc-shop-online-430-637769176378896159.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredFoods = () =>
    foods.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Search */}
      <View
        style={{
          height: 60,
          marginVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Icon
          name="search"
          size={15}
          color="black"
          style={{position: 'absolute', top: 10, left: 10}}
        />
        <TextInput
          autoCorrect={false}
          onChangeText={text => setSearchText(text)}
          style={{
            backgroundColor: colors.inactive,
            height: 40,
            flex: 1,
            marginEnd: 5,
            borderRadius: 5,
            opacity: 0.8,
            paddingStart: 30,
          }}
        />
        <Icon name="list-ul" size={35} color={colors.inactive} />
      </View>
      {/* menu ngang */}
      <View style={{height: 100}}>
        <View style={{height: 1, backgroundColor: colors.inactive}} />
        <View style={{flex: 1}}>
          <FlatList
            horizontal
            data={categories}
            keyExtractor={item => item.name}
            style={{flex: 1}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(`Name: ${item.name}`);
                  }}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'cover',
                      borderRadius: 25,
                      margin: 10,
                    }}
                    source={{uri: item.url}}
                  />
                  <Text style={{color: 'black', fontSize: fontSizes.h6}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: 1, backgroundColor: colors.inactive}} />
      </View>
      {/* menu dọc */}
      {filteredFoods().length > 0 ? (
        <FlatList
          data={filteredFoods()}
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
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: fontSizes.h3}}>
            No result
          </Text>
        </View>
      )}
    </View>
  );
}
export default FoodList;
