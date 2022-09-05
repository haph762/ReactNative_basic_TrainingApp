import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../constants/index';

const FiveStars = props => {
  const {numberStar} = props;
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map(item =>
        item <= numberStar - 1 ? (
          <Icon key={item} name="star" size={12} color={colors.warning} />
        ) : (
          <Icon key={item} name="star" size={12} color={colors.inactive} />
        ),
      )}
    </View>
  );
};

export default FiveStars;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
