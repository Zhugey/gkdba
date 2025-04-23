import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 55555,
  name: 'Zhugey的GKD订阅-自用',
  version: 0,
  author: 'Zhugey',
  checkUpdateUrl: './gkd.version.json5',
  supportUri:
    'https://raw.githubusercontent.com/Zhugey/gkdba/main/dist/gkd.json5',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
