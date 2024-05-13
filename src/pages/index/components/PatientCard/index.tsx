import { Image, View, Text } from '@tarojs/components';
import emptyAvatarIcon from '@/assets/icons/emptyAvatar.png';
import qrcodeIcon from '@/assets/icons/qrcode.png';
import styles from './index.module.scss';

export const PatientCard = () => {
  return (
    <View className={styles['patient-card']}>
      <Image className={styles['avatar']} src={emptyAvatarIcon} />
      <View className={styles['patient-info']}>
        <View className={styles['patient-name']}>
          <Text>肖浚鑫</Text>
          <View className={styles['switch-btn']}>
            <Text>切换</Text>
          </View>
        </View>
        <Text className={styles['patient-cardNo']}>25023240852858</Text>
      </View>
      <View className={styles['qrcode']}>
        <Image src={qrcodeIcon} className={styles['icon']} />
      </View>
    </View>
  );
};
