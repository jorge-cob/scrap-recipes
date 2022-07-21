import React from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';
import { SUCCESS_GREEN } from '../../assets/theme/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  alertText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ff0000',
  },
  successText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: SUCCESS_GREEN
  }
});

function InputFeedback({ text, type }) {
  return (
    <View style={styles.container}>
      <Text style={type === 'error' ? styles.alertText : styles.successText}>{text}</Text>
    </View>
  );
}

export default InputFeedback;
