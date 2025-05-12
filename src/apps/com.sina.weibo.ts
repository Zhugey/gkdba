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
      name: '帖子内部卡片广告',
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
  ],
});
