import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '首页听书内容',
      desc: '点击不感兴趣',
      activityIds: 'com.ss.android.article.news.activity.MainActivity',
      rules: [
        {
          key: 1,
          matches: ['FlattenUIText[text="听书"] +n UIDislike[desc="不感兴趣"]'],
          snapshotUrls: 'https://i.gkd.li/i/19891221',
        },
        {
          key: 2,
          preKeys: 1,
          matches: [
            'TextView[text^="不看所有小说的内容"] <<3 FrameLayout -2 @FrameLayout',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19891221',
        },
      ],
    },
    {
      key: 2,
      name: '首页及文章内部分流广告',
      desc: '点击不感兴趣',
      activityIds: [
        'com.ss.android.article.news.activity.MainActivity',
        'com.bytedance.ugc.forum.innerfeed.ArticleInflowActivity',
      ],
      rules: [
        {
          key: 1,
          anyMatches: [
            'FlattenUIText[text="广告  刚刚  "] + UIView[text="不感兴趣 按钮"]',
            'ViewGroup[id="com.ss.android.article.news:id/fwz"][desc^="广告"] > ImageView[desc="不感兴趣"]',
            'FlattenUIText[text*="广告"] +n UIView',
            'TextView[text="广告"] < ViewGroup - ImageView[desc="不感兴趣"]',
            'LynxFlattenUI[text$="广告"] + UIView[text="不感兴趣 按钮"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20665779',
        },
      ],
    },
    {
      key: 3,
      name: '点击不感兴趣按钮',
      desc: '点击不感兴趣按钮',
      rules: [
        {
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.forum.innerfeed.ArticleInflowActivity',
          ],
          anyMatches: [
            'TextView[text="为什么看到此广告"] <<n LinearLayout > FrameLayout > ViewGroup[vid="dk"] > TextView[text="不感兴趣"]',
            'LinearLayout[vid="ch"] > FrameLayout > ViewGroup[vid="dk"] > TextView[text="不感兴趣"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '点击数量过多-提交按钮',
      desc: '点击数量过多-提交按钮',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          fastQuery: true,
          key: 1,
          matches: 'TextView[text="数量过多"]',
        },
        {
          fastQuery: true,
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="提交"]',
        },
      ],
    },
    {
      key: 5,
      name: '评论区满意否',
      desc: '点击X',
      rules: [
        {
          activityIds: [
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
            'com.ss.android.ugc.detail.activity.TikTokActivity',
            'com.bytedance.ugc.forum.innerfeed.ArticleInflowActivity',
            'com.ss.android.detail.feature.detail2.view.NewDetailActivity',
          ],
          matches:
            'TextView[text="你对该内容下的评论是否满意？"] < LinearLayout +3 ImageView',
        },
      ],
    },
  ],
});
