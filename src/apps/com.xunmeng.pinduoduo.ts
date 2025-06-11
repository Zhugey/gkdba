import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '首页右下角月卡卷弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
          matches:
            'TextView[text="月卡专享券"] <<8 ViewGroup + ViewGroup > ViewGroup',
          snapshotUrls: 'https://i.gkd.li/i/20686283',
        },
      ],
    },
  ],
});
