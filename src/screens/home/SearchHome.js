import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from '../../assets/themes';

const SearchHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/search.png')}
        />
        <Text style={styles.text}>Search homes</Text>
      </View>
      <View style={styles.right}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/filter.png')}
        />
      </View>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  left: {
    flexDirection: 'row',
    backgroundColor: Colors.main2,
    flex: 1,
    padding: 14,
    borderRadius: 8,
    marginRight: 15,
  },
  text: {
    marginStart: 15,
  },
  right: {
    aspectRatio: 1,
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
