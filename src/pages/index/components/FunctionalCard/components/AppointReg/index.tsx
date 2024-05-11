import { Text, View, ViewProps } from '@tarojs/components';
import styles from './index.module.scss';

interface Props extends ViewProps {}

export const AppointReg = (props: Props) => {
  return (
    <View className={styles['appoint-reg']} {...props}>
      <Text className={styles['title']}>预约挂号</Text>
      <Text className={styles['tips']}>在家轻松挂号</Text>
      <View className={styles['button']}>
        <Text>去挂号</Text>
      </View>
    </View>
  );
};
