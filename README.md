# 摸鱼办

[![](https://img.shields.io/badge/Powered%20By-Wechaty-yellowgreen.svg)](https://github.com/wechaty/wechaty)
![Node.js v16](https://img.shields.io/badge/node->=16-green.svg)

🤖 摸鱼办：一个每天按时提醒你摸鱼的微信机器人。

> 此项目基于 wechaty-puppet-wechat 协议，核心原理是通过 HTTP 调用网页 API，不需要 token 即可使用。<br>
> 注意：若要基于本项目使用 wechaty-puppet-padlocal 协议，需自行安装 padlocal 依赖。并且把 wechaty 版本降到 0.60.1 版本。[点此查看 padlocal-demo](https://github.com/zoudingyi/wechaty-puppet-padlocal-demo)<br>
> 更多协议请参考：<https://wechaty.js.org/docs/puppet-providers/>

**2022-8-24 更新：当前使用版本通过 UOS 登录，这种方式不太稳定，且随时可能因为官方某些原因而无法使用，若想稳定运行最好使用 padlocal 协议。**

## 功能

- 工作时间内，每小时播报【摸鱼办】提醒信息（群提醒）。
- 输入'摸鱼'可查看当前【摸鱼办】提醒信息。
- 每天早上按时播报当天气候（群提醒）。
- 输入'天气'可查询当前气温。
- 下班时间提醒，给予亲切的下班问候（群提醒）。
- 其他：可自行扩展。

**_注：要添加其他功能具体请看[Wechaty API 文档](https://wechaty.gitbook.io/wechaty/v/zh/)_**

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

## 效果图

<div align=left>

### 1.每小时播报（群内提醒）

![效果图](/src/img/report1.jpg)

### 2.下班提醒（群内提醒）

![效果图](/src/img/report2.jpg)

### 3.天气查询 （群内或单独给机器人发消息都可查询）

![效果图](/src/img/report3.jpg)

</div>

## 其他

用到的时间处理工具：<br>
[dayjs](https://github.com/iamkun/dayjs)<br>
[node-schedule](https://github.com/node-schedule/node-schedule)
