import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListProps } from './Types';

function List(props: ListProps<T>) {
  const { data, renderItem, style } = props;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={style?.list}
    />
  );
}

const styles = StyleSheet.create({

});

export default List;
