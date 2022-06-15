import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function SearchBox({ searchText, onChangeSearchText }) {
  return (
    <TextInput
      onChangeText={(newText) => onChangeSearchText(newText)}
      value={searchText}
      placeholder="Search recipes"
    />
  );
}

const styles = StyleSheet.create({

});

export default SearchBox;
