import { Message, log } from 'wechaty';

export function logInfo(msg: Message) {
  // console.log('msg :>> ', msg);
  // log.info("GokuBot", `message: ${msg.toString()}`);
  if (msg.talker()?.id === 'weixin') return;
  console.log('╔══════════════════════════════════════════════╗');
  console.log(`╠═ from: ${msg.talker()?.name()}: ${msg.talker()?.id}`);
  console.log(`╠═ text: ${msg.text()}`);
  console.log(`╠═ isRoom: ${msg.room()}`);
  console.log(`╠═ RoomId: ${msg.room()?.id}`);
  console.log('╚══════════════════════════════════════════════╝');
}
