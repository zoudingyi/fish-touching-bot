interface Config {
  name: string;
  token: string;
  roomName: string;
  payDay: number;
  workStartTime: string;
  workEndTime: string;
  weaRule: object;
  fishRule: object;
  leaveWorkRule: object;
}

const config: Config = {
  name: 'goku-bot',
  token: '',
  roomName: '摸鱼办',
  payDay: 15,
  workStartTime: '9:00',
  workEndTime: '18:00',
  weaRule: { tz: 'Asia/Shanghai', rule: '0 30 8 * * *' }, // 每日天气预报
  fishRule: {
    dayOfWeek: [1, 2, 3, 4, 5], // 周
    hour: [10, 11, 12, 14, 15, 16, 17], // 时刻
    minute: 0,
    second: 5,
    tz: 'Asia/Shanghai'
  },
  leaveWorkRule: {
    dayOfWeek: [1, 2, 3, 4, 5], // 周
    hour: [18], // 时刻
    minute: 0,
    second: 5,
    tz: 'Asia/Shanghai'
  }
};

export default config;
