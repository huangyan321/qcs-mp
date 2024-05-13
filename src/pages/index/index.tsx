import { View } from '@tarojs/components';
import styles from './index.module.scss';
import { Navbar } from './components/Navbar';
import { PatientCard } from './components/PatientCard';
import { FunctionalCard } from './components/FunctionalCard';
import { HealthyInformation } from './components/HealthyInformation';

function Index() {
  return (
    <View className={styles['content']}>
      {/* 标题栏 */}
      <Navbar />
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
