import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomMultiSelect() {
  const [items, setItems] = useState([
    {
      name: '',
      id: 0,
      ingredients: [
        {
          name: 'Apple',
          id: 1,
        },
        {
          name: 'Strawberry',
          id: 2,
        },
      ],
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  function addItemToList(searchText: string) {
    setItems((items) => {
      items[0] = {
        ...items[0],
        ingredients: [...items[0].ingredients, {
          name: searchText,
          id: items[0].ingredients.length + 1
        }]
      };

      return [...items];
    });
  }

  function AddItemComponent(searchText: string) {
    return (
      <TouchableOpacity
        style={{
          height: 30, justifyContent: 'center', alignItems: 'center',
        }}
        onPress={() => addItemToList(searchText)}
      >
        <Text> Add {searchText} as ingredient </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <SectionedMultiSelect
        items={items}
        IconRenderer={Icon}
        uniqueKey="id"
        subKey="ingredients"
        searchPlaceholderText="Search ingredient"
        selectText="Choose some ingredients..."
        showDropDowns={false}
        readOnlyHeadings
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        noResultsComponent={(searchTerm) => AddItemComponent(searchTerm)}
      />
    </View>
  );
}

export default CustomMultiSelect;
