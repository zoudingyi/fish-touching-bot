import { setSchedule, createRule } from '../utils/schedule';
import { timingBroadcast } from '../utils/weather';
import { fishTouchMsg, leaveWorkMsg } from '../utils/broadcast';
import { Contact, log } from 'wechaty';
import config from '../config';

const { roomName, fishRule, leaveWorkRule, weaRule } = config;

function onLogin(bot: any) {
  return async function (user: Contact) {
    log.info('StarterBot', '%s login', user);
    const robotRoom = await bot.Room.find({ topic: roomName });

    setSchedule(createRule(fishRule), async () => {
      console.log('-----fish touching broadcast-----');
      await robotRoom.say(fishTouchMsg());
    });

    setSchedule(createRule(leaveWorkRule), async () => {
      console.log('-----leave work broadcast-----');
      await robotRoom.say(leaveWorkMsg());
    });

    setSchedule(weaRule, async () => {
      console.log('-----weather broadcast-----');
      const weaMsg = await timingBroadcast();
      await robotRoom.say(weaMsg);
    });
  };
}

export default onLogin;
