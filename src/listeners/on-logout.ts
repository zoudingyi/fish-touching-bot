import { Contact, log } from 'wechaty';

function onLogout(user: Contact) {
  log.info('StarterBot', '%s logout', user);
}

export default onLogout;
