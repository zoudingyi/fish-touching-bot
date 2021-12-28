import { log, WechatyBuilder } from 'wechaty';
import onMessage from './listeners/on-message';
import onScan from './listeners/on-scan';
import onLogin from './listeners/on-login';
import onLogout from './listeners/on-logout';
import config from './config';

const { name, token } = config;

const bot = WechatyBuilder.build({
  name,
  /**
   * How to set Wechaty Puppet Provider:
   *
   *  1. Specify a `puppet` option when instantiating Wechaty. (like `{ puppet: 'wechaty-puppet-whatsapp' }`, see below)
   *
   * You can use the following providers locally:
   *  - wechaty-puppet-wechat (web protocol, no token required)
   *  - wechaty-puppet-whatsapp (web protocol, no token required)
   *  - wechaty-puppet-padlocal (pad protocol, token required)
   *  - etc. see: <https://wechaty.js.org/docs/puppet-providers/>
   */
  puppet: 'wechaty-puppet-wechat'
  // puppetOptions: {
  //   token
  // }
});

bot.on('scan', onScan);
bot.on('login', onLogin(bot));
bot.on('logout', onLogout);
bot.on('message', onMessage);

bot
  .start()
  .then(() => log.info('StarterBot', name + ' Started.'))
  .catch((e) => log.error('StarterBot', e));
