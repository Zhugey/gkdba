import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sig.wameiji',
  name: '挖煤姬',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点跳过',
      rules: [
        {
          activityIds: 'com.sig.wameiji.MainActivity',
          matches: 'View[desc^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/19891103',
        },
      ],
    },
  ],
});
