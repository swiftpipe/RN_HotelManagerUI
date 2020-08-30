import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from '../../assets/themes';

const ListAgent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Text style={styles.textAgent}>Agent</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>PH Housing</Text>
        <Text>Agent</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBtn}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/comment.png')}
          />
        </View>
        <View style={styles.iconBtn}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/call.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ListAgent;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  right: {
    flexDirection: 'row',
  },

  iconBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginLeft: 10,
  },

  con: {
    width: 45,
    height: 45,
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  textAgent: {
    color: '#FFF',
  },
  title: {
    fontSize: 18,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  middle: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
