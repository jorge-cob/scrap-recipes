import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListProps } from './Types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

function List(props: ListProps<T>): React.ReactElement {
  const { data, renderItem, style } = props;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={style?.list && styles.container}
    />
  );
}

export default List;
