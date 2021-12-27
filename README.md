# 摸鱼办

[![](https://img.shields.io/badge/Powered%20By-Wechaty-yellowgreen.svg)](https://github.com/wechaty/wechaty)
![Node.js v16](https://img.shields.io/badge/node->=16-green.svg)

🤖 摸鱼办：一个每天按时提醒你摸鱼的微信机器人。

> 此项目基于 wechaty-puppet-wechat 协议，核心原理是通过 HTTP 调用网页 API，不需要 token 即可使用。<br>
> 注意：若要基于本项目使用 wechaty-puppet-padlocal 协议，需自行安装 padlocal 依赖。并且把 wechaty 版本降到 0.60.1 版本。[点此查看 padlocal-demo](https://github.com/zoudingyi/wechaty-puppet-padlocal-demo)<br>
> 更多协议请参考：<https://wechaty.js.org/docs/puppet-providers/>

## 运行

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
  name: 'BotName', // 机器人名称
  token: '',
  roomName: '摸鱼办' // 需要发起摸鱼提醒的群聊
  payDay: 15, // 发工资的日期
  workStartTime: '9:00', // 上班时间
  workEndTime: '18:00', // 下班时间
  weaRule: { tz: 'Asia/Shanghai', rule: '0 30 8 * * *' }, // 每日的天气预报提醒时间
  fishRule: {}, // 摸鱼提醒时间
  leaveWorkRule: {} // 下班提醒时间
};
// 具体时间设置格式请看schedule.ts文件
```

### 3. Starter Bot.

```
$ npm run dev
```
