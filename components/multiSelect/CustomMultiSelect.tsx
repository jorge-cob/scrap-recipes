import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import SubmitButton from '../button/button';
import { PURE_BLUE } from '../../assets/theme/constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PURE_BLUE,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 30,
    marginHorizontal: 40,
    width: 1250
  },
});

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
      <SubmitButton handleOnPress={() => addItemToList(searchText)} title={`Add ${searchText}`} />
      //insert icon here
    );
  }

  return (
    <View style={styles.container}>
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
        styles={{ button: {
          backgroundColor: '#F44336',
          height: 60,
          flex: 1
        }}}
      />
    </View>
  );
}

export default CustomMultiSelect;
