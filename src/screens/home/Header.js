import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Fonts, Colors} from '../../assets/themes';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.subTitle}>Find a Thoudsand</Text>
        <Text style={styles.title}>Homes For Sale & Rent</Text>
      </View>
      <View>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require('../../assets/icons/bell.png')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.Bold,
    color: Colors.main,
    fontSize: 23,
  },
  subTitle: {
    color: Colors.main,
    fontSize: 18,
  },
  left: {},
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
