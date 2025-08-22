import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmri.universalapp',
  name: '移动爱家',
  groups: [
    {
      key: 1,
      name: '首页全屏弹窗广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.cmri.universalapp.home.popdialog.AdvertiseDialogActivity',
          matches: 'ImageView[id="com.cmri.universalapp:id/ivCancelDlg"]',
        },
      ],
    },
    {
      key: 2,
      name: '首页卡片广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.cmri.universalapp.SmartMainActivity',
            'com.cmri.universalapp.SmartMainProxyActivity',
          ],
          matches:
            '@ImageView[id="com.cmri.universalapp:id/iv_close"] <<n RelativeLayout[id="com.cmri.universalapp:id/rl_yunying"]',
        },
      ],
    },
    {
      key: 3,
      name: '首页右下角浮窗广告',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.cmri.universalapp.SmartMainActivity',
            'com.cmri.universalapp.SmartMainProxyActivity',
          ],
          matches:
            '@ImageView[id="com.cmri.universalapp:id/iv_close"] <<n RelativeLayout[id="com.cmri.universalapp:id/main_float_drag_layout"]',
        },
      ],
    },
  ],
});
