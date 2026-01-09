import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hikvision.security.support',
  name: '海康云商',
  groups: [
    {
      key: 1,
      name: '首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hikvision.security.support.home.MainActivity',
          matches:
            '@ImageView[vid="ivClose"] <<n FrameLayout[vid="anylayler_dialog_content_wrapper"]',
        },
      ],
    },
  ],
});
