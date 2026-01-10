import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  groups: [
    {
      key: 1,
      name: '首页全屏广告弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.com.hkgt.gasapp.activity.main.HkMainActivity',
          matches:
            '@ImageView[vid="exit"] <<n FrameLayout[id="android:id/content"]',
        },
      ],
    },
  ],
});
