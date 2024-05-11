import { Image, View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
import queueIcon from '@/assets/icons/queue.png';
import reportIcon from '@/assets/icons/report.png';
import styles from './index.module.scss';
import { PreConsultAI } from './components/PreConsultAI';
import { QueryButton } from './components/QueryButton';
import { AppointReg } from './components/AppointReg';
import { OnlineCheckIn } from './components/OnlineCheckIn';

export const FunctionalCard = () => {
  const icons = { queue: queueIcon, report: reportIcon };
  const renderIcon = (type: keyof typeof icons) => {
    return <Image src={icons[type]} style={{ width: '100%', height: '100%' }} />;
  };
  return (
    <View className={styles['functional-card']}>
      <View className={styles['top']}>
        {/* 预约挂号按钮 */}
        <AppointReg style={{ width: `calc((100% - ${pxTransform(8)}) / 2)` }} />
        <View className={styles['functional-box']}>
          {/* 在线签到按钮 */}
          <OnlineCheckIn />
          {/* 队列查询按钮 */}
          <QueryButton backgroundColor='#f4ecff' icon={renderIcon('queue')} text='队列查询' />
          {/* 报告查询按钮 */}
          <QueryButton backgroundColor='#d7edff' icon={renderIcon('report')} text='报告查询' />
        </View>
      </View>
      {/* 智能预问诊 */}
      <PreConsultAI style={{ height: pxTransform(74) }} />
    </View>
  );
};
