import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './pages/home-page';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(): React.ReactElement {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}
