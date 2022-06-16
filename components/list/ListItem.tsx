import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemProps } from './Types';

function ListItem({ listItem }: ListItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{listItem.title}</Text>
      <TouchableOpacity style={{
        height: 30, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Icon name="angle-down" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
});

export default ListItem;
