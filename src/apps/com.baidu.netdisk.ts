import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '首页“安全备份”弹窗',
      desc: '点击“暂不开启”',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.RepeatedNewQuickSettingsActivity',
          matches:
            'Button[vid="btn_text" && text="开启安全备份"] + TextView[vid="not_open" && text="暂不开启"]',
        },
      ],
    },
    {
      key: 2,
      name: '“开启照片自动备份”弹窗',
      desc: '点击“暂不开启”',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.RepeatedNewQuickSettingsActivity',
          matches:
            'TextView[text*="是否开启照片自动备份"] +n Button[vid="dialog_button_cancel" && text="暂不开启"]',
        },
      ],
    },
    {
      key: 3,
      name: '“我的”页面Banner广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            'ViewGroup[vid="banner_ad"] <<n ViewPager[vid="banner_view_pager"] + ImageView[vid="close_ad"]',
        },
      ],
    },
    {
      key: 4,
      name: '全屏弹窗广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            'TextView[text*="购买"] <<n FrameLayout > ViewGroup > ImageView[vid="iv_close"]',
        },
      ],
    },
  ],
});
