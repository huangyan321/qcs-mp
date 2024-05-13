import { View, Text, Image, ViewProps } from '@tarojs/components';
import informationPic from '@/assets/images/informationPic.png';
import viewIcon from '@/assets/icons/view.png';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface Props extends ViewProps {}

export const InformationCard = (props: Props) => {
  const { className = '', ...rest } = props;

  return (
    <View className={classnames([className, styles['information-card']])} {...rest}>
      <Image src={informationPic} className={styles['main-picture']} />
      <View className={styles['main-info-wrapper']}>
        <Text className={styles['title']}>健康资讯</Text>
        <View className={styles['keyword']}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View className={styles['keyword-item']} key={index}>
              <Text>关键词{index + 1}</Text>
            </View>
          ))}
        </View>
        <View className={styles['date-and-view']}>
          <Text className={styles['date']}>2024-03-09</Text>
          <View className={styles['view']}>
            <Image src={viewIcon} />
            <Text>103</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
