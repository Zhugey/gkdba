import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.liupintang.pocketrubbing',
  name: '掌上碑帖',
  groups: [
    {
      key: 1,
      name: '首页全屏广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.liupintang.pocketrubbing.activity.MainActivity',
          matches: 'ImageView[id="com.liupintang.pocketrubbing:id/close_iv"]',
        },
      ],
    },
    {
      key: 2,
      name: '首页中间Banner广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.liupintang.pocketrubbing.activity.MainActivity',
          matches:
            '@ImageView[vid="ivBannerClose"] - ImageView[vid="ivBanner"] < ViewGroup[vid="clBanner"]',
        },
      ],
    },
  ],
});
