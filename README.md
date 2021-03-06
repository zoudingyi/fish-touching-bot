# æ¸é±¼å

[![](https://img.shields.io/badge/Powered%20By-Wechaty-yellowgreen.svg)](https://github.com/wechaty/wechaty)
![Node.js v16](https://img.shields.io/badge/node->=16-green.svg)

ð¤ æ¸é±¼åï¼ä¸ä¸ªæ¯å¤©ææ¶æéä½ æ¸é±¼çå¾®ä¿¡æºå¨äººã

> æ­¤é¡¹ç®åºäº wechaty-puppet-wechat åè®®ï¼æ ¸å¿åçæ¯éè¿ HTTP è°ç¨ç½é¡µ APIï¼ä¸éè¦ token å³å¯ä½¿ç¨ã<br>
> æ³¨æï¼è¥è¦åºäºæ¬é¡¹ç®ä½¿ç¨ wechaty-puppet-padlocal åè®®ï¼éèªè¡å®è£ padlocal ä¾èµãå¹¶ä¸æ wechaty çæ¬éå° 0.60.1 çæ¬ã[ç¹æ­¤æ¥ç padlocal-demo](https://github.com/zoudingyi/wechaty-puppet-padlocal-demo)<br>
> æ´å¤åè®®è¯·åèï¼<https://wechaty.js.org/docs/puppet-providers/>

## åè½

- å·¥ä½æ¶é´åï¼æ¯å°æ¶æ­æ¥ãæ¸é±¼åãæéä¿¡æ¯ï¼ç¾¤æéï¼ã
- è¾å¥'æ¸é±¼'å¯æ¥çå½åãæ¸é±¼åãæéä¿¡æ¯ã
- æ¯å¤©æ©ä¸ææ¶æ­æ¥å½å¤©æ°åï¼ç¾¤æéï¼ã
- è¾å¥'å¤©æ°'å¯æ¥è¯¢å½åæ°æ¸©ã
- ä¸ç­æ¶é´æéï¼ç»äºäº²åçä¸ç­é®åï¼ç¾¤æéï¼ã
- å¶ä»ï¼å¯èªè¡æ©å±ã

**_æ³¨ï¼è¦æ·»å å¶ä»åè½å·ä½è¯·ç[Wechaty API ææ¡£](https://wechaty.gitbook.io/wechaty/v/zh/)_**

## è¿è¡

### 1. Clone project.

```
$ git clone https://github.com/zoudingyi/fish-touching-bot.git
```

### 2. Install Node dependencies.

```
$ cd fish-touching-bot
$ npm install
```

### 2. Set congfig.ts

```ts
const config = {
  name: 'BotName', // æºå¨äººåç§°
  token: '',
  roomName: 'æ¸é±¼å' // éè¦åèµ·æ¸é±¼æéçç¾¤è
  payDay: 15, // åå·¥èµçæ¥æ
  workStartTime: '9:00', // ä¸ç­æ¶é´
  workEndTime: '18:00', // ä¸ç­æ¶é´
  weaRule: { tz: 'Asia/Shanghai', rule: '0 30 8 * * *' }, // æ¯æ¥çå¤©æ°é¢æ¥æéæ¶é´
  fishRule: {}, // æ¸é±¼æéæ¶é´
  leaveWorkRule: {} // ä¸ç­æéæ¶é´
};
// å·ä½æ¶é´è®¾ç½®æ ¼å¼è¯·çschedule.tsæä»¶
```

### 3. Starter Bot.

```
$ npm run dev
```

## ææå¾

<div align=left>

### 1.æ¯å°æ¶æ­æ¥ï¼ç¾¤åæéï¼

![ææå¾](/src/img/report1.jpg)

### 2.ä¸ç­æéï¼ç¾¤åæéï¼

![ææå¾](/src/img/report2.jpg)

### 3.å¤©æ°æ¥è¯¢ ï¼ç¾¤åæåç¬ç»æºå¨äººåæ¶æ¯é½å¯æ¥è¯¢ï¼

![ææå¾](/src/img/report3.jpg)

</div>

## å¶ä»

ç¨å°çæ¶é´å¤çå·¥å·ï¼<br>
[dayjs](https://github.com/iamkun/dayjs)<br>
[node-schedule](https://github.com/node-schedule/node-schedule)
