import schedule, { RecurrenceSegment, Timezone } from 'node-schedule';

export interface Rule {
  date?: RecurrenceSegment;
  dayOfWeek?: RecurrenceSegment;
  hour?: RecurrenceSegment;
  minute?: RecurrenceSegment;
  month?: RecurrenceSegment;
  second?: RecurrenceSegment;
  year?: RecurrenceSegment;
  tz?: Timezone;
}

export const setSchedule = schedule.scheduleJob;

export function createRule(rule: Rule) {
  return new schedule.RecurrenceRule(
    rule.year,
    rule.month,
    rule.date,
    rule.dayOfWeek,
    rule.hour,
    rule.minute,
    rule.second,
    rule.tz
  );
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
