import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '功能-看广告畅听',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: 'ViewGroup[desc="关闭"]',
        },
      ],
    },
    {
      key: 2,
      name: '评论区广告',
      desc: '点击菜单-不感兴趣',
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          fastQuery: true,
          key: 1,
          matches:
            'TextView[text="广告"] +n ImageView[id="com.tencent.qqmusic:id/bc_"]',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="不感兴趣"] - ImageView < RelativeLayout',
        },
      ],
    },
  ],
});
