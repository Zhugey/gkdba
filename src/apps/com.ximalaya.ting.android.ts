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
          matches:
            'TextView[text="VIP会员限时优惠"] < RelativeLayout + ImageView[id="com.ximalaya.ting.android:id/main_iv_close"]',
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
    {
      key: 9,
      name: '首页分段广告',
      desc: '自动点击“广告”-点击“直接关闭”',
      rules: [
        {
          key: 1,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@View[desc="关闭广告"] - LinearLayout - RelativeLayout < RelativeLayout[id="com.ximalaya.ting.android:id/xm_ad_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/20150045',
        },
        {
          preKeys: 1,
          key: 2,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@TextView[text="直接关闭"] <<n FrameLayout[id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/20150046',
        },
      ],
    },
    {
      key: 10,
      name: '播放页分段广告',
      desc: '自动点击“广告”-点击“直接关闭”',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          key: 1,
          matches: [
            '@FrameLayout[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true] <<n FrameLayout[id="com.ximalaya.ting.android:id/main_root_ad_lay"]',
            'TextView[text="广告"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20150083',
            'https://i.gkd.li/i/20150136',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@TextView[text="直接关闭"] <<n FrameLayout[id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/20150092',
        },
      ],
    },
    {
      key: 11,
      name: '"我的"页面横幅广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@View[desc="关闭广告"] <<n FrameLayout[id="com.ximalaya.ting.android:id/main_fl_banner_ad"]',
        },
      ],
    },
    {
      key: 12,
      name: '做任务领VIP广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@ImageView[id="com.ximalaya.ting.android:id/main_free_listen_time_close_iv"] + TextView[text="完成所有任务享会员权益，畅听VIP专享内容"]',
          snapshotUrls: 'https://i.gkd.li/i/20665865',
        },
      ],
    },
    {
      key: 13,
      name: '会员到期广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@ImageView[id="com.ximalaya.ting.android:id/main_iv_close"] +n TextView[text="连续包月"]',
          snapshotUrls: 'https://i.gkd.li/i/20665869',
        },
      ],
    },
    {
      key: 14,
      name: '主页收听时间弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '@ImageView[id="com.ximalaya.ting.android:id/main_point_center_home_dialog_close_iv"] <<n RelativeLayout[id="com.ximalaya.ting.android:id/main_free_listen_time_dialog_container"]',
        },
      ],
    },
  ],
});
