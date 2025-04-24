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
  ],
});
