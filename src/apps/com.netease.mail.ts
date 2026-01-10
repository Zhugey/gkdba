import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 1,
      name: '首页AI推荐弹窗',
      desc: '点击“收起”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches:
            '@TextView[vid="tv_close" && text="收起"] <<n FrameLayout[vid="round_layout"]',
        },
      ],
    },
    {
      key: 2,
      name: '“我”页面赢积分换会员广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches:
            'TextView[text="赢积分换会员"] < ViewGroup < RecyclerView[vid="list_integral_tasks"] + ImageView[vid="iv_close_integral_list"]',
        },
      ],
    },
  ],
});
