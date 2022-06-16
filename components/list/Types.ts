import { ListRenderItem, ViewStyle } from 'react-native';

export type ListItemProps = {
  id: string;
  title: string;
};

export type ListProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T> | null | undefined;
  style?: Partial<{
    list: ViewStyle;
  }>;
};
