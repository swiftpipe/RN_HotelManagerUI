import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {Colors, Fonts} from '../../assets/themes';
const w = Dimensions.get('screen').width;
const Item = ({item, onPress}) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.card}>
      <View style={{position: 'relative'}}>
        <Image source={{uri: item.images[0]}} style={styles.image} />
        <View style={styles.view1} />
        <View style={styles.view2} />
        <View style={[styles.agentButton]}>
          <Text style={styles.txtAgent}>{item.type}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.priceCon}>
          <Text style={styles.price}>
            ${item.price}
            <Text style={{fontWeight: 'normal', fontSize: 14}}>/year</Text>
          </Text>

          <View style={styles.startCon}>
            <Image source={require('../../assets/icons/star.png')} />
            <Text style={styles.textStart}>{item.star}</Text>
          </View>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.adress}>{item.adress}</Text>
      </View>
      <View style={styles.heartButton}>
        <Image source={require('../../assets/icons/heart.png')} />
      </View>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  name: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.main,
    marginVertical: 10,
  },
  adress: {
    color: Colors.gray,
  },
  bottom: {
    padding: 10,
    marginTop: 20,
  },
  priceCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStart: {
    fontSize: 18,
  },
  price: {
    fontWeight: '900',
    color: Colors.accent,
    fontSize: 20,
  },
  image: {
    width: w * 0.7,
    height: w * 0.5,
    borderRadius: 10,
    zIndex: 3,
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 35,
    position: 'absolute',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    top: 20,
  },
  agentButton: {
    width: 50,
    height: 50,
    borderRadius: 35,
    position: 'absolute',
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    bottom: -15,
    zIndex: 5,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  txtAgent: {
    fontSize: 12,
    color: '#FFF',
  },
  card: {
    padding: 10,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#FFF',
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 10,
  },

  view1: {
    position: 'absolute',
    width: '90%',
    height: 30,
    backgroundColor: '#CADADC',
    borderRadius: 30,
    alignSelf: 'center',
    bottom: -10,
    zIndex: 2,
  },
  view2: {
    position: 'absolute',
    width: '80%',
    height: 30,
    backgroundColor: '#E5f1f1',
    borderRadius: 30,
    alignSelf: 'center',
    bottom: -20,
  },
});
