import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function SearchBox({ onChangeSearchText, placeholder }) {
  return (
    <TextInput
      onChangeText={(newText) => onChangeSearchText(newText)}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({

});

export default SearchBox;
