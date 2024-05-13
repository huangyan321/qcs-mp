import { View, Text, Image } from '@tarojs/components';
import { Navbar } from '@/components/Navbar';
import LogoPng from '@/assets/icons/logo.png';
import styles from './index.module.scss';
import { PatientCard } from './components/PatientCard';
import { FunctionalCard } from './components/FunctionalCard';
import { HealthyInformation } from './components/HealthyInformation';

function Index() {
  return (
    <View className={styles['content']}>
      {/* 标题栏 */}
      <Navbar
        title={
          <View className={styles['title']}>
            <Image className={styles['logo']} src={LogoPng} />
            <Text>狄耐克互联网医院</Text>
          </View>
        }
      />
      {/* 患者信息卡片 */}
      <PatientCard />
      {/* 功能性按钮卡片 */}
      <FunctionalCard />
      {/* 健康资讯 */}
      <HealthyInformation />
    </View>
  );
}

export default Index;
