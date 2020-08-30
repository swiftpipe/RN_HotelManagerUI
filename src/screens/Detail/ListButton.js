import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ListButton = ({icon, num, title}) => {
  return (
    <View>
      <View style={styles.top}>
        <Image source={icon} />
        <Text style={styles.txt}>{num}</Text>
      </View>
      <Text>{title}</Text>
    </View>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    marginLeft: 10,
  },
});
