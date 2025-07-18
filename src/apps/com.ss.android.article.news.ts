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
      name: '首页分流广告',
      desc: '点击不感兴趣',
      activityIds: 'com.ss.android.article.news.activity.MainActivity',
      rules: [
        {
          key: 1,
          anyMatches: [
            'FlattenUIText[text="广告  刚刚  "] + UIView[text="不感兴趣 按钮"]',
            '@ImageView[desc="不感兴趣"] <<n ViewGroup[desc^="广告"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20665779',
        },
        {
          key: 2,
          preKeys: 1,
          anyMatches: [
            'TextView[text="不感兴趣"] <<2 FrameLayout',
            'TextView[text="不感兴趣"] < ViewGroup[id="com.ss.android.article.news:id/dk"] < FrameLayout',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20665797',
        },
        {
          key: 3,
          preKeys: 2,
          anyMatches: [
            'TextView[text="不感兴趣"] <<2 FrameLayout',
            'TextView[text="不感兴趣"] < ViewGroup[id="com.ss.android.article.news:id/dk"] < FrameLayout',
          ],
          snapshotUrls: 'https://i.gkd.li/i/20665799',
        },
      ],
    },
    {
      key: 3,
      name: '文章内部分流广告',
      desc: '点击不感兴趣',
      activityIds: 'com.bytedance.ugc.forum.innerfeed.ArticleInflowActivity',
      rules: [
        {
          key: 1,
          matches: 'LynxFlattenUI[text$="广告"] + UIView[text="不感兴趣 按钮"]',
          snapshotUrls: 'https://i.gkd.li/i/20665968',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="不感兴趣"] <<2 FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/20665971',
        },
      ],
    },
    {
      key: 4,
      name: '首页视频流广告',
      desc: '点击不感兴趣',
      activityIds: 'com.ss.android.article.news.activity.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView[text="广告"] < ViewGroup - ImageView[desc="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/20685787',
        },
        {
          key: 2,
          preKeys: 1,
          matches: 'TextView[text="不感兴趣"] <<2 FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/20685792',
        },
      ],
    },
    {
      key: 5,
      name: '首页分流广告2',
      desc: '点击更多-不感兴趣-数量过多-提交',
      activityIds: 'com.ss.android.article.news.activity.MainActivity',
      rules: [
        {
          key: 1,
          matches: 'FlattenUIText[text*="广告"] +n UIView',
        },
        {
          fastQuery: true,
          key: 2,
          preKeys: 1,
          anyMatches: [
            'TextView[text="数量过多"]',
            'TextView[text="不感兴趣"] <<2 FrameLayout',
          ],
        },
        {
          fastQuery: true,
          key: 3,
          preKeys: 2,
          anyMatches: [
            'TextView[text="提交"]',
            'TextView[text="不感兴趣"] <<2 FrameLayout',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '评论区满意否',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          matches:
            'TextView[text="你对该内容下的评论是否满意？"] < LinearLayout +3 ImageView',
        },
      ],
    },
  ],
});
