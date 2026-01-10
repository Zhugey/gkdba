import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.carowner',
  name: '平安好车主',
  groups: [
    {
      key: 1,
      name: '首页全屏弹窗广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.pingan.carowner.activity.MainActivity',
          matches:
            '@ImageView[vid="ad_cancel"] <<n FrameLayout[id="android:id/content"]',
        },
      ],
    },
  ],
});
