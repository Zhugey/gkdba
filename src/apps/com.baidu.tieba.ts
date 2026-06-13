import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '首页及吧内浏览帖子广告',
      desc: '自动点击X',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.forum.ForumActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules: [
        {
          key: 1,
          anyMatches: [
            'TextView[text="广告"] <<n FrameLayout - RelativeLayout > TextView[text="刚刚"] + FrameLayout',
            'TextView[text="广告"] <<n LinearLayout[vid="obfuscated"] > RelativeLayout > ImageView +2 FrameLayout > ImageView',
            'TextView[text*="广告"] + FrameLayout[vid="obfuscated"] > LinearLayout',
            'TextView[text="贴吧游戏"] < LinearLayout +2 FrameLayout[vid="obfuscated"]',
            'TextView[text*="广告"] -n RelativeLayout < ViewGroup[vid="obfuscated"] +3 FrameLayout > LinearLayout + FrameLayout',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19872730',
        },
        {
          preKeys: 1,
          key: 2,
          matches: 'CheckBox[text*="广告重复" || text*="已经看过"]',
        },
        {
          preKeys: 2,
          key: 3,
          matches: 'TextView[text*="理由"] + View[vid="obfuscated"]',
        },
      ],
    },
    {
      key: 2,
      name: '首页游戏广告',
      desc: '自动点击X',
      rules: [
        {
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          anyMatches: [
            'TextView[text^="游戏"] <<n RecyclerView[id="com.baidu.tieba:id/obfuscated"] > RelativeLayout > View +n LinearLayout > RelativeLayout + ImageView[id="com.baidu.tieba:id/obfuscated"]',
            'TextView[text^="游戏"] <<n RecyclerView[id="com.baidu.tieba:id/obfuscated"] > RelativeLayout > View +n LinearLayout > View + ImageView[id="com.baidu.tieba:id/obfuscated"]',
            'TextView[text="贴吧游戏吧"] <<n RecyclerView[id="com.baidu.tieba:id/obfuscated"] > RelativeLayout > View +n LinearLayout > ImageView[id="com.baidu.tieba:id/obfuscated"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '贴内右下角浮窗广告',
      desc: '自动点击X',
      rules: [
        {
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: 'TextView[text="广告"] + ImageView[vid="obfuscated"]',
        },
      ],
    },
  ],
});
