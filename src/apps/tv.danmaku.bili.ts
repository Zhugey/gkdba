import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '视频页底部推荐广告',
      desc: '点击更多-不感兴趣',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          fastQuery: true,
          key: 1,
          anyMatches: [
            '@FrameLayout[vid="more"] <<n ViewGroup[vid="ad_tint_frame"][desc*="广告"]',
            '@FrameLayout[id="tv.danmaku.bili.adbiz:id/more"] <<n ViewGroup[id="tv.danmaku.bili.adbiz:id/ad_tint_frame"][desc*="广告"]',
          ],
        },
        {
          fastQuery: true,
          key: 1,
          preKeys: 1,
          matches:
            'TextView[text="不感兴趣"] < RelativeLayout[id="tv.danmaku.bili:id/reason1_layout"]',
        },
      ],
    },
    {
      key: 2,
      name: '首页视频分流广告',
      desc: '点击更多-不感兴趣',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          fastQuery: true,
          key: 1,
          matches:
            '@FrameLayout[vid="more"] <<n ViewGroup[vid="ad_tint_frame"]',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="不感兴趣"] < FrameLayout',
        },
      ],
    },
  ],
});
