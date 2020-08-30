import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {Mocks} from '../../assets/data';
import {Colors, Fonts} from '../../assets/themes';
import ListAgent from './ListAgent';
import ListButton from './ListButton';
import {useRoute, useNavigation} from '@react-navigation/native';
const w = Dimensions.get('screen').width;
const DetailScreen = () => {
  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item.images[0]}} style={styles.image} />
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={require('../../assets/icons/back.png')} />
        </Pressable>
        <View style={styles.cardPos}>
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.adress}>{item.adress}</Text>
            <View>
              <View style={styles.startCon}>
                <Image source={require('../../assets/icons/star.png')} />
                <Text style={styles.textStart}>{item.star}</Text>
              </View>
            </View>
            <View style={styles.heartButton}>
              <Image source={require('../../assets/icons/heart.png')} />
            </View>
          </View>
          <View style={styles.view1} />
          <View style={styles.view2} />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Listing Agent</Text>
        <ListAgent />
      </View>
      <View style={[styles.body, {marginTop: 0}]}>
        <Text style={styles.title}>Spectification</Text>
        <View style={styles.specContainer}>
          <ListButton
            icon={require('../../assets/icons/badroom.png')}
            num={3}
            title="Bad rooms"
          />
          <ListButton
            icon={require('../../assets/icons/bathroom.png')}
            num={2}
            title="Bath rooms"
          />
          <ListButton
            icon={require('../../assets/icons/fit.png')}
            num={200}
            title="Square Fit"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.price}>
          ${item.price}
          <Text style={{fontWeight: 'normal', fontSize: 14}}>/year</Text>
        </Text>
        <Pressable style={styles.btn}>
          <Text style={styles.txtBtn}>Book Buy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.main,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  txtBtn: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  price: {
    fontWeight: '900',
    color: Colors.accent,
    fontSize: 20,
  },
  body: {
    marginTop: 100,
    padding: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.Bold,
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
  cardPos: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    bottom: -80,
  },
  card: {
    backgroundColor: Colors.main2,
    padding: 20,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 10,
    zIndex: 10,
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
    bottom: 20,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  startCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStart: {
    fontSize: 18,
  },
  name: {
    fontFamily: Fonts.Bold,
    fontSize: 25,
    color: Colors.main,
    marginTop: 10,
  },
  adress: {
    color: Colors.gray,
    marginVertical: 10,
  },
  image: {
    width: w,
    height: w,
    borderRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 9,
  },
});
