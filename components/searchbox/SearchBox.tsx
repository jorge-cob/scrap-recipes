import React from 'react';
import {
  StyleSheet, TextInput, View, Text
} from 'react-native';

function SearchBox({ onChangeSearchText, placeholder, title }): React.ReactElement {
  return (
    <View style={styles.container}>
      { title && (
        <Text style={styles.title}>{title}</Text>
      )}
      <TextInput
        onChangeText={(newText) => onChangeSearchText(newText)}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    width: '400px',
    padding: 10
  },
  title: {
    marginTop: 24,
    fontSize: 23,
    marginRight: 20
  }
});

export default SearchBox;
