import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '朋友圈广告',
      desc: '自动点击“关闭该广告”',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          matches:
            '@LinearLayout[id="com.tencent.mm:id/n2t"] <<n FrameLayout - TextView[text="你觉得这条广告怎么样？"]',
        },
      ],
    },
  ],
});
