import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({

});

function Header({ onPressBack, title }): React.ReactElement {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onPressBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default Header;
