import { View, ViewProps, Image, Text } from '@tarojs/components';
import questionMaskIcon from '@/assets/icons/questionMark.png';
import goIcon from '@/assets/icons/go.png';
import styles from './index.module.scss';

interface Props extends ViewProps {}
export const PreConsultAI = (props: Props) => {
  return (
    <View className={styles['pre-consult-ai']} {...props}>
      <Image className={styles['question-icon']} src={questionMaskIcon} />
      <View className={styles['content']}>
        <View className={styles['text-wrapper']}>
          <Text className={styles['text']}>智能预问诊</Text>
          <Image className={styles['icon']} src={goIcon} />
        </View>
        <Text className={styles['tips']}>不知道挂什么科室？预问诊给你建议</Text>
      </View>
    </View>
  );
};
