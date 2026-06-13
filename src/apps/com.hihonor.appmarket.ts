import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '应用市场',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点跳过',
      rules: [
        {
          activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
          matchTime: 1000,
          matches: 'Button[vid="btn_skip"]',
        },
      ],
    },
  ],
});
