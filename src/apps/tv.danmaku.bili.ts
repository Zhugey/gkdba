import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '视频页底部推荐及搜索广告',
      desc: '点击更多-不感兴趣',
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.search2.main.BiliMainSearchActivity',
      ],
      rules: [
        {
          fastQuery: true,
          key: 1,
          anyMatches: [
            '@FrameLayout[vid="more"] <<n ViewGroup[vid="ad_tint_frame"]',
            '@FrameLayout[id="tv.danmaku.bili.adbiz:id/more"] <<n ViewGroup[id="tv.danmaku.bili.adbiz:id/ad_tint_frame"]',
            '@FrameLayout[vid="more_layout"] <<n FrameLayout[vid="ad_tint_frame"][desc*="轻点两下查看详情"]',
          ],
        },
        {
          fastQuery: true,
          key: 2,
          preKeys: 1,
          matches:
            '@RelativeLayout[id="tv.danmaku.bili:id/reason1_layout"] <<n LinearLayout[id="tv.danmaku.bili:id/dislike_reasons"]',
        },
        {
          fastQuery: true,
          key: 3,
          preKeys: 2,
          matches:
            'TextView[text="将减少展示此类广告"] +n TextView[text="关闭"]',
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
          anyMatches: [
            '@FrameLayout[vid="more"] <<n ViewGroup[vid="ad_tint_frame"]',
            '@FrameLayout[vid="more"] <<n ViewGroup[desc*="轻点两下查看详情"]',
            '@FrameLayout[vid="more"] <<n RelativeLayout[vid="ad_tint_frame"]',
          ],
          excludeMatches:
            '@LinearLayout[id="tv.danmaku.bili:id/inline_live_badge"] <<n ViewGroup[desc*="轻点两下查看详情"]',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="不感兴趣"] < FrameLayout',
        },
      ],
    },
    {
      key: 3,
      name: '播放页下方游戏下载广告',
      desc: '点击更多-不感兴趣',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          fastQuery: true,
          key: 1,
          matches:
            'TextView[text="下载"] <<n FrameLayout[id="tv.danmaku.bili:id/game_button"] +n ImageView[id="tv.danmaku.bili:id/more"][desc="更多操作"]',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="我不想看"] < RelativeLayout',
        },
        {
          fastQuery: true,
          key: 3,
          preKeys: 2,
          matches: 'TextView[text="将减少相似推荐"] +n TextView[text="关闭"]',
        },
      ],
    },
  ],
});
