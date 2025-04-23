import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '首页听书内容',
      desc: '点击不感兴趣',
      rules: [
        {
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches: [
            'FlattenUIText[text="听书"] +n UIDislike[desc="不感兴趣"]',
            'TextView[text^="不看所有小说的内容"] <<3 FrameLayout -2 @FrameLayout',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19891221',
        },
      ],
    },
  ],
});
