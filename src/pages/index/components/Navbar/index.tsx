import { useState, useEffect } from 'react';
import { getSystemInfoSync, getMenuButtonBoundingClientRect } from '@tarojs/taro';
import LogoPng from '@/assets/icons/logo.png';
import { View, Image, Text } from '@tarojs/components';
import styles from './index.module.scss';

export const Navbar = () => {
  const [statusBarHeight, setStatusBarHeight] = useState(20);
  const [navBarHeight, setNavBarHeight] = useState(40);
  const initStatusBarHeight = () => {
    const systemInfo = getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 20); // 单位是px
    if (process.env.TARO_ENV === 'weapp') {
      // 微信小程序 获取胶囊的信息
      const menuButtonInfo = getMenuButtonBoundingClientRect();
      // 实际标题的高度 = 胶囊高度 + 胶囊pading*2
      setNavBarHeight((menuButtonInfo.top - (systemInfo.statusBarHeight ?? 20)) * 2 + menuButtonInfo.height);
    }
  };
  useEffect(() => {
    initStatusBarHeight();
  }, []);
  return (
    <>
      <View className={styles['navbar']}>
        {/* 占位 */}
        <View style={{ height: statusBarHeight + 'px' }}></View>
        {/* 实际标题栏 */}
        <View className={styles['navbar-title']} style={{ height: navBarHeight + 'px' }}>
          <Image className={styles['logo']} src={LogoPng} />
          <Text>狄耐克互联网医院</Text>
        </View>
      </View>
      {/* 垫片 (解决 navbar fixed后，下面的元素顶到最上面的问题) */}
      <View style={{ height: statusBarHeight + navBarHeight + 'px' }}></View>
    </>
  );
};
