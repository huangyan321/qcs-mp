import { Text, View } from '@tarojs/components';
import { ReactNode } from 'react';
import styles from './index.module.scss';

export interface Props {
  backgroundColor?: string;
  icon?: ReactNode;
  text?: string;
}

export const QueryButton = (props: Props) => {
  const { backgroundColor, icon, text } = props;
  return (
    <View className={styles['query-button']} style={{ backgroundColor }}>
      <View className={styles['icon']}>{icon}</View>
      <Text className={styles['text']}>{text}</Text>
    </View>
  );
};
