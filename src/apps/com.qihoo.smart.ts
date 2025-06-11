import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.smart',
  name: '360智慧生活',
  groups: [
    {
      key: 1,
      name: '首页3卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.qihoo.main.flutter.SmartHomeFlutterActivity',
          matches: [
            'View[desc="home_screen_device_card_manage"] +3 ImageView[desc=null]',
          ],
        },
      ],
    },
  ],
});
