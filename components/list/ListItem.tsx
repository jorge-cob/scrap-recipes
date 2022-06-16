import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItemProps } from './Types';

function ListItem({listItem}: ListItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{listItem.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListItem;
