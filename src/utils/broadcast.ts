import dayjs from 'dayjs';
import config from '../config';

const weekdays: {
  label: string;
  value: string;
}[] = [
  {
    label: 'Monday',
    value: '星期一'
  },
  {
    label: 'Tuesday',
    value: '星期二'
  },
  {
    label: 'Wednesday',
    value: '星期三'
  },
  {
    label: 'Thursday',
    value: '星期四'
  },
  {
    label: 'Friday',
    value: '星期五'
  },
  {
    label: 'Saturday',
    value: '星期六'
  }
];
const { payDay, workEndTime, workStartTime } = config;

type Days = (
  future: string,
  unit: 'minute' | 'hour' | 'day',
  now?: Date
) => number;

// future 未来时间 unit 时间单位
const difference: Days = function (future, unit, now = new Date()) {
  return dayjs(future).diff(dayjs(now), unit);
};
// 计算剩余天数
const remainingDays: Days = function (future, unit, now = new Date()) {
  return difference(future, unit, now) + 1;
};

// 是否在工作时间内
function isWrokingTime(): boolean {
  const Date: string = dayjs().format('YYYY-MM-DD');
  const Time: string = dayjs().format('HH:mm');
  const isAfter: boolean = dayjs(`${Date} ${Time}`).isAfter(
    dayjs(`${Date} ${workStartTime}`)
  );
  const isBefore: boolean = dayjs(`${Date} ${Time}`).isBefore(
    dayjs(`${Date} ${workEndTime}`)
  );
  return isAfter && isBefore;
}

function fishTouchMsg(): string {
  if (!isWrokingTime()) {
    return '别摸了，都没上班摸啥鱼';
  }
  const curDate = dayjs().format('MM-D-dddd-A'); // 当前日期
  const arrDate = curDate.split('-');
  const [m, d, week, daylong] = arrDate;
  const month = Number(m);
  const day = Number(d);
  const year = dayjs().year();
  const weekCn = weekdays.find(item => item.label === week)?.value;
  const yuandan = remainingDays(`${year + 1}-01-01`, 'day'); // 元旦
  const chunjie = remainingDays(`${year + 1}-02-01`, 'day'); // 春节
  const weekDays = 5 - dayjs().day(); // 周几
  const meeting = remainingDays(`${year + 1}-01-22`, 'day'); // 年会
  // 发工资时间
  let salary: number;
  if (month === '12') {
    salary =
      day > payDay
        ? remainingDays(`${year + 1}-1-${payDay}`, 'day')
        : remainingDays(`${year}-12-${payDay}`, 'day');
  } else {
    salary =
      day > payDay
        ? remainingDays(`${year}-${month + 1}-${payDay}`, 'day')
        : remainingDays(`${year}-${month}-${payDay}`, 'day');
  }
  // 下班时间
  const workEndHour = difference(
    `${year}-${month}-${day} ${workEndTime}`,
    'hour'
  );
  const workEndMinute =
    difference(`${year}-${month}-${day} ${workEndTime}`, 'minute') % 60;

  return `【摸鱼办】提醒您：\n🍁今天是${month}月${day}日 ${weekCn}\n👨‍💻${
    daylong === 'AM' ? '上午' : '下午'
  }好摸鱼人！工作再累，一定不要忘记喝水哦！希望此刻看到消息的人可以和我一起来喝一杯水。及时排便洗手，记得关门。一小时后我会继续提醒大家喝水，和我一起成为一天喝八杯水的人吧！\n══════════\n🚇距离下班还有：${workEndHour}小时${workEndMinute}分钟\n🎮距离周末(大周)还有：${weekDays}天\n🕹️距离周末(小周)还有：${
    weekDays + 1
  }天\n💰距离发工资还有：${salary}天\n🍁距离元旦还有：${yuandan}天\n🕺距离年会还有：${meeting}天\n🏮距离春节还有：${chunjie}天\n══════════\n有事没事起身去茶水间，去厕所，去廊道走走别老在工位上坐着。上班是帮老板赚钱，摸鱼是赚老板的钱！最后，祝愿天下所有摸鱼人，都能愉快的渡过每一天`;
}

function leaveWorkMsg() {
  return '各部门请注意，下班时间到了！！！请滚，不要浪费电费，记得发日报！\n[Doge] over';
}

export { fishTouchMsg, leaveWorkMsg };
