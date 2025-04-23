import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
    {
      key: 1,
      name: '读书节年卡会员弹窗',
      desc: '读书节年卡会员弹窗，自动点击X',
      rules: [
        {
          activityIds:
            'com.alibaba.ailabs.tg.oneservice.cluster.services.h5alert.MarketingPopupWebViewActivity',
          matches: '@View + View[text^="读书节福利 年卡"]',
          snapshotUrls: 'https://i.gkd.li/i/19872303',
        },
      ],
    },
    {
      key: 2,
      name: '读书节年卡会员全屏弹窗',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alibaba.ailabs.tg.oneservice.cluster.services.h5alert.MarketingPopupWebViewActivity',
          matches:
            'ImageView[id="com.alibaba.ailabs.tg:id/tg_bitmap_dialog_cancel_button"]',
          snapshotUrls: 'https://i.gkd.li/i/19872292',
        },
      ],
    },
    {
      key: 3,
      name: '登陆音乐账号弹窗',
      desc: '自动点击X',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alibaba.ailabs.tg.thirdpartymusic.bind.BindActivity',
          matches: 'ImageView[id="com.alibaba.ailabs.tg:id/im_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19872255',
        },
      ],
    },
  ],
});
