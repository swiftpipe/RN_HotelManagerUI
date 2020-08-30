import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {Colors} from '../../assets/themes';

const Menus = [
  {
    id: 'Home',
    icon: require('../../assets/icons/home.png'),
  },
  {
    id: 'Comment',
    icon: require('../../assets/icons/comment-outline.png'),
  },
  {
    id: 'Heart',
    icon: require('../../assets/icons/heart-outline.png'),
  },
  {
    id: 'User',
    icon: require('../../assets/icons/user.png'),
  },
];

const BottomBar = () => {
  return (
    <View style={styles.container}>
      {Menus.map((e) => (
        <Pressable style={styles.btn}>
          <Image source={e.icon}></Image>
        </Pressable>
      ))}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.main,
    borderRadius: 30,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
