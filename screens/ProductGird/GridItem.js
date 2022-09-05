import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FiveStars from './FiveStars';

const GridItem = props => {
  const {item, index, handleSave} = props;
  return (
    // gird item
    <View
      style={{
        flex: 0.5,
        width: 200,
        minHeight: 200,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: index % 2 === 0 ? 10 : 0,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive,
      }}>
      {/* image and price */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: item.url,
          }}></Image>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h3,
            fontWeight: 'bold',
            flex: 1,
            textAlign: 'right',
          }}>
          $ {item.price}
        </Text>
      </View>
      {/* name product */}
      <Text
        style={{
          color: colors.primary,
          fontSize: fontSizes.h5,
          fontWeight: 'bold',
          marginTop: 5,
          marginHorizontal: 10,
        }}>
        {item.productName}
      </Text>
      {/* specifications */}
      {item.specifications?.map((specification, indexSpec) => (
        <Text
          key={indexSpec}
          style={{
            color: 'black',
            fontSize: fontSizes.h6,
            paddingHorizontal: 5,
            paddingBottom: 10,
          }}>
          * {specification}
        </Text>
      ))}
      {/* review */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 5,
          marginVertical: 10,
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={handleSave}>
          <Icon
            name="heart"
            size={22}
            color={
              item.isSaved === undefined || item.isSaved === false
                ? colors.inactive
                : 'red'
            }
          />
          <Text
            style={{
              color:
                item.isSaved === undefined || item.isSaved === false
                  ? colors.inactive
                  : 'red',
              fontSize: fontSizes.h6 * 0.9,
              marginLeft: 5,
              width: 50,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <FiveStars numberStar={item.stars} />
          <Text
            style={{
              color: colors.success,
              fontSize: fontSizes.h6 * 0.9,
              textAlign: 'right',
              paddingTop: 5,
            }}>
            {item.review} review
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GridItem;
