import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ingredient } from '../../pages/Types';

const styles = StyleSheet.create({
  itemTitle: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginTop: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemExpanded: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
});

function ListItem({ listItem }: any): React.ReactElement {
  const { name, basicIngredients } = listItem.item;
  const [expanded, setExpanded] = useState(false);
  const handleIconPress = () => setExpanded(!expanded);

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.itemTitle}>
        <Text style={styles.title}>{name}</Text>
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
      { expanded && (
        <View style={styles.itemExpanded}>
          {basicIngredients.map((item: Ingredient) => (
            <Text>
              {item.name}
            </Text>
          ))}

        </View>
      )}
    </View>
  );
}

export default ListItem;
