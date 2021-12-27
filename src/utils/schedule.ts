import schedule from 'node-schedule';

interface Rule {
  dayOfWeek: number[];
  hour: number[];
  minute: number;
  second: number;
  tz: string;
}
// second (0-59)
// minute (0-59)
// hour (0-23)
// month (0-11)
// dayOfWeek (0-6) Starting with Sunday
// tz

export function setSchedule(rule: any, callback: any) {
  schedule.scheduleJob(rule, callback);
}

export function createRule(rule: Rule | any) {
  const Rule: any = new schedule.RecurrenceRule();
  Object.keys(rule).forEach((key: string) => {
    Rule[key] = rule[key];
  });
  return Rule;
}

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
// example(每天8点30分0秒执行): '0 30 8 * * *'
