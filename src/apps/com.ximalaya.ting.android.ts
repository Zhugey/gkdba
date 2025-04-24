import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 1,
      name: '播放页底部广告1',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: [
            'ImageView[id="com.ximalaya.ting.android:id/x_play_ad_banner_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19891027',
        },
      ],
    },
    {
      key: 2,
      name: '播放页底部广告2',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: [
            'ImageView[id="com.ximalaya.ting.android:id/main_buy_view_yellow_zone_btn_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19891027',
        },
      ],
    },
    {
      key: 3,
      name: '播放页弹底部窗广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: 'ImageView[id="com.ximalaya.ting.android:id/main_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/20149718',
        },
      ],
    },
    {
      key: 4,
      name: '功能-后台通知权限提醒',
      desc: '自动点击“暂不开启”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            'TextView[text="防止后台播放异常，建议开启通知权限"] +n Button[text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/20149818',
        },
      ],
    },
    {
      key: 5,
      name: '播放页免费领会员广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            'TextView[text="免费领3小时会员免音贴广告特权"] -n ImageView[id="com.ximalaya.ting.android:id/main_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/20149824',
        },
      ],
    },
    {
      key: 6,
      name: '播放页领取VIP广告',
      desc: '自动点击“不再提醒”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            'TextView[text^="即将失效"] <<n ViewGroup +n ViewGroup > @TextView[text="不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/20149847',
        },
      ],
    },
    {
      key: 7,
      name: '首页白金VIP广告',
      desc: '自动点击X',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            'ImageView[desc="广告"] <<n RelativeLayout > ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/20149893',
        },
      ],
    },
    {
      key: 8,
      name: '播放页白金VIP广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            'TextView[text="开通白金会员 享免广特权"] + ImageView[id="com.ximalaya.ting.android:id/main_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/20149897',
        },
      ],
    },
  ],
});
