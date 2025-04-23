import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 1,
      name: '播放页底部广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: [
            'ImageView[id="com.ximalaya.ting.android:id/x_play_ad_banner_close"]',
            'ImageView[id="com.ximalaya.ting.android:id/main_buy_view_yellow_zone_btn_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19891027',
        },
      ],
    },
  ],
});
