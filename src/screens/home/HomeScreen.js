import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import SearchHome from './SearchHome';
import ListCard from './ListCard';
import BottomBar from './BottomBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <SearchHome />
        <ListCard onPress={(item) => navigate.navigate('Detail', {item})} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
});
