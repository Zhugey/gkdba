import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '首页及吧内浏览帖子广告',
      desc: '自动点击X',
      rules: [
        {
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
          ],
          matches:
            'TextView[text="广告"] <<n FrameLayout - RelativeLayout > TextView[text="刚刚"] + FrameLayout',
          snapshotUrls: 'https://i.gkd.li/i/19872730',
        },
      ],
    },
  ],
});
