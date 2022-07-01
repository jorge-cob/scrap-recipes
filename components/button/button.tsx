import React from 'react';
import {
  Pressable, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 34
  }
});

function SubmitButton({ handleOnPress, title }) {
  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default SubmitButton;
