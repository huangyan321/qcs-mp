import { View, Text, Image } from '@tarojs/components';
import arrowRightIcon from '@/assets/icons/arrowRight.png';
import { InformationCard } from '@/components/InformationCard';
import styles from './index.module.scss';

export const HealthyInformation = () => {
  return (
    <View className={styles['healthy-information']}>
      <View className={styles['header']}>
        <Text className={styles['title']}>健康资讯</Text>
        <View className={styles['action']}>
          <Text>更多</Text>
          <Image src={arrowRightIcon} className={styles['icon']} />
        </View>
      </View>
      <View className={styles['content']}>
        {/* 资讯卡片 */}
        {Array.from({ length: 5 }).map((_, index) => (
          <InformationCard key={index} />
        ))}
      </View>
    </View>
  );
};
