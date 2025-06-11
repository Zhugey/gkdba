import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '首页宝贝推荐广告',
      desc: '长按选择不看此类推荐',
      rules: [
        {
          key: 1,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'TextView[text="广告"] -10 LinearLayout[longClickable=true][visibleToUser=true]',
          action: 'longClick',
        },
        {
          key: 2,
          preKeys: 1,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          matches: 'View[desc="引起不适"] < View < View -2 ImageView',
        },
      ],
    },
  ],
});
