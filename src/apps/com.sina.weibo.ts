import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '帖子内部广告',
      desc: '点击不感兴趣',
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchTime: 1000,
          matches:
            'TextView[text="广告"] + ImageView[id="com.sina.weibo:id/iv_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/20666341',
        },
        {
          key: 2,
          preKeys: 1,
          fastQuery: true,
          matches: 'TextView[text="对此内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/20666354',
        },
      ],
    },
    {
      key: 2,
      name: '帖子内部卡片广告1',
      desc: '点击X',
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView < FrameLayout - FrameLayout > View[desc!=null] <<n LinearLayout - RelativeLayout[id="com.sina.weibo:id/lyHeader"]',
          snapshotUrls: 'https://i.gkd.li/i/20666473',
        },
        {
          key: 2,
          preKeys: 1,
          matches:
            'TextView[text="太多重复或相似内容"] < LinearLayout - ImageView[id="com.sina.weibo:id/icon"] < LinearLayout',
          snapshotUrls: 'https://i.gkd.li/i/20666476',
        },
      ],
    },
    {
      key: 3,
      name: '帖子内部卡片广告2',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          anyMatches: [
            '@ImageView[id="com.sina.weibo:id/close"] < RelativeLayout +n RelativeLayout[id="com.sina.weibo:id/desc_container"] > ImageView[id="com.sina.weibo:id/ad_tag"]',
            'TextView[text="广告"] < LinearLayout[id="com.sina.weibo:id/ll_close"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '主页右下角浮窗广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sina.weibo.MainTabActivity',
          anyMatches: [
            '@ImageView[id="com.sina.weibo:id/close"] <<n FrameLayout[id="com.sina.weibo:id/floating_window"]',
            'ImageView[id="com.sina.weibo:id/closeView"]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '首页签到弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches:
            'TextView[text="点击签到"] -n Image[text="answer_titile"] < View + TextView',
          snapshotUrls: 'https://i.gkd.li/i/20686275',
        },
      ],
    },
    {
      key: 6,
      name: '动态界面分流广告',
      desc: '点击不感兴趣',
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: [
        {
          key: 1,
          matches:
            'TextView[text="广告"] +2 ImageView[id="com.sina.weibo:id/ly_bottom_menus_btn"]',
        },
        {
          key: 2,
          preKeys: 1,
          matches:
            'TextView[text="不感兴趣"] < LinearLayout - ImageView[id="com.sina.weibo:id/icon"] < LinearLayout',
        },
      ],
    },
  ],
});
