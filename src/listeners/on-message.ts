import { Message } from 'wechaty';
import { logInfo } from '../utils/console-info';
import { getWeatherForMsg } from '../utils/weather';
import { fishTouchMsg } from '../utils/broadcast';

async function onMessage(msg: Message) {
  logInfo(msg);
  if (msg.text() === 'ding') {
    await msg.say('dong');
  }
  if (msg.text() === '天气') {
    const weaMsg = await getWeatherForMsg();
    await msg.say(weaMsg);
  }
  if (msg.text() === '摸鱼') {
    const broMsg = await fishTouchMsg();
    await msg.say(broMsg);
  }
}

export default onMessage;
