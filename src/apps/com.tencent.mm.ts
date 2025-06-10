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
    {
      key: 2,
      name: '订阅号文章内广告',
      desc: '点击不感兴趣',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          matches:
            '@TextView[text="广告" && visibleToUser=true] <<n View[id="ad_container"]',
          exampleUrls: [
            'https://e.gkd.li/84ec2f35-821b-4b7a-97d3-a6cc9c6eb1ed',
            'https://e.gkd.li/39e9d7c5-8891-4a35-b980-faad18bf288f',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15198464', // 防止在文章末尾广告关闭后误触
            'https://i.gkd.li/i/20673714',
          ],
        },
        {
          key: 2,
          preKeys: 1,
          matches: '@TextView[text="不感兴趣"] <<n View[id="ad_container"]',
          exampleUrls: 'https://e.gkd.li/0c8248a1-2c59-4bcd-b632-cf3031321fc8',
        },
        {
          key: 3,
          preKeys: 2,
          matches: '@TextView[text="与我无关"] <<n View[id="ad_container"]',
          exampleUrls: 'https://e.gkd.li/4a2b6f49-1ec1-4bd7-bab1-3007d0d48aac',
        },
      ],
    },
  ],
});
