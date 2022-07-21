import React from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';
import { SUCCESS_GREEN } from '../../assets/theme/constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#ff0000',
  },
  successText: {
    fontSize: 16,
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
