import { Image, View } from '@tarojs/components';
import { pxTransform, navigateTo } from '@tarojs/taro';
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
  const routeTo = (page: 'appointReg' | 'checkIn' | 'queueQuery' | 'reportQuery' | 'preConsultAI') => {
    const url = `/pages/${page}/index`;
    navigateTo({ url });
  };
  return (
    <View className={styles['functional-card']}>
      <View className={styles['top']}>
        {/* 预约挂号按钮 */}
        <AppointReg style={{ width: `calc((100% - ${pxTransform(8)}) / 2)` }} />
        <View className={styles['functional-box']}>
          {/* 在线签到按钮 */}
          <OnlineCheckIn onClick={() => routeTo('checkIn')} />
          {/* 队列查询按钮 */}
          <QueryButton
            backgroundColor='#f4ecff'
            icon={renderIcon('queue')}
            text='队列查询'
            onClick={() => routeTo('queueQuery')}
          />
          {/* 报告查询按钮 */}
          <QueryButton
            backgroundColor='#d7edff'
            icon={renderIcon('report')}
            text='报告查询'
            onClick={() => routeTo('reportQuery')}
          />
        </View>
      </View>
      {/* 智能预问诊 */}
      <PreConsultAI style={{ height: pxTransform(74) }} onClick={() => routeTo('preConsultAI')} />
    </View>
  );
};
