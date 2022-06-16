import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemProps } from './Types';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
});

function ListItem({ listItem }: ListItemProps): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const handleIconPress = () => setExpanded(!expanded);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{listItem.title}</Text>
      <TouchableOpacity style={{
        height: 30, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Icon
          name={expanded ? 'angle-down' : 'angle-up'}
          size={30}
          color="#000"
          onPress={handleIconPress}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ListItem;
