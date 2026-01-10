import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
    {
      key: 1,
      name: '收件箱顶部Banner广告',
      desc: '点击不感兴趣',
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: 'TextView[text="广告"] + FrameLayout[vid="g0"]',
        },
        {
          key: 2,
          preKeys: 1,
          fastQuery: true,
          matches: 'TextView[text="不感兴趣"]',
        },
      ],
    },
  ],
});
