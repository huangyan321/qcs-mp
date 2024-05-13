import { Image, Text, View, ViewProps } from '@tarojs/components';
import calendarIcon from '@/assets/icons/calendar.png';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface Props extends ViewProps {}

export const OnlineCheckIn = (props: Props) => {
  const { className = '', ...rest } = props;
  return (
    <View className={classNames([styles['online-check-in'], className])} {...rest}>
      <View className={styles['text-box']}>
        <Text className={styles['text']}>在线签到</Text>
        <Text className={styles['tips']}>免排队轻松签到</Text>
      </View>
      <Image src={calendarIcon} className={styles['icon']} />
    </View>
  );
};
