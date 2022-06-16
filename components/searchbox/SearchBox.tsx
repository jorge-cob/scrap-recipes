import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function SearchBox({ onChangeSearchText, placeholder }): React.ReactElement {
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
