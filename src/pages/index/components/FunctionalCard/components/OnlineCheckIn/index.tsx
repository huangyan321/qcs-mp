import { Image, Text, View } from '@tarojs/components';
import calendarIcon from '@/assets/icons/calendar.png';
import styles from './index.module.scss';

export const OnlineCheckIn = () => {
  return (
    <View className={styles['online-check-in']}>
      <View className={styles['text-box']}>
        <Text className={styles['text']}>在线签到</Text>
        <Text className={styles['tips']}>免排队轻松签到</Text>
      </View>
      <Image src={calendarIcon} className={styles['icon']} />
    </View>
  );
};
