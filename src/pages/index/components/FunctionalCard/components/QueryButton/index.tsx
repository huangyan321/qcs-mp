import { Text, View, ViewProps } from '@tarojs/components';
import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface Props extends ViewProps {
  backgroundColor?: string;
  icon?: ReactNode;
  text?: string;
}

export const QueryButton = (props: Props) => {
  const { backgroundColor, icon, text, className, ...rest } = props;
  return (
    <View className={classNames([styles['query-button'], className])} style={{ backgroundColor }} {...rest}>
      <View className={styles['icon']}>{icon}</View>
      <Text className={styles['text']}>{text}</Text>
    </View>
  );
};
