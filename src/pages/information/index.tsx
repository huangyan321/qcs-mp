import { Text, View } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import { InformationCard } from '@/components/InformationCard';
import styles from './index.module.scss';

function Information() {
  return (
    <View className={styles['information']}>
      <Navbar title={<Text>健康资讯</Text>} back />
      <View className={styles['content']}>
        {Array.from({ length: 5 }).map((_, index) => (
          <InformationCard key={index} className={styles['card']} />
        ))}
      </View>
    </View>
  );
}

export default Information;
