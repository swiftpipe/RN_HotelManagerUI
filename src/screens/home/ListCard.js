import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Fonts} from '../../assets/themes';
import {Mocks} from '../../assets/data';
import Item from './Item';
const ListCard = ({onPress}) => {
  renderItem = ({item}) => <Item item={item} onPress={onPress} />;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleList}>Recomanded</Text>
        <Text>View All</Text>
      </View>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Mocks}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  titleList: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
  },
});
