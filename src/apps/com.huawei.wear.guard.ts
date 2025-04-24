import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wear.guard',
  name: '智能关怀',
  groups: [
    {
      key: 1,
      name: '功能-添加陌生联系人为手表联系人',
      desc: '自动点击“以后再说”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huawei.ui.home.HomeActivity',
          matches: 'Button[text="添加为手表联系人"] +n Button[text="以后再说"]',
        },
      ],
    },
  ],
});
