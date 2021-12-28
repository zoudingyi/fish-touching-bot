import request from './request';

// 天气预报接口 http://aider.meizu.com/app/weather/listWeather?cityIds=101270101
const HOST = 'http://aider.meizu.com/app';

interface ListWeatherDataValue {
  alarms: any[];
  city: string;
  cityid: number;
  indexes: {
    abbreviation: string;
    alias: string;
    content: string;
    level: string;
    name: string;
  }[],
  pm25: Record<string, string | number>;
  provinceName: string;
  realtime: Record<string, string>;
  weatherDetailsInfo: {
    publishTime: string;
    weather3HoursDetailsInfos: Record<string, string>[];
  };
  weathers: Record<string, string>[];
}
interface ListWeatherReq {
  code: string;
  message: string;
  redirect: string;
  value: ListWeatherDataValue[];
}

// cityIds：101270101 （成都）
function getWeatherInfo() {
  return request.get<ListWeatherReq>(HOST + '/weather/listWeather', { params: { cityIds: 101270101 } })
    .then(res => {
      const { indexes, realtime, weathers } = res.data.value[0];
      // 气温推荐
      const { content, name, level } =
        indexes[getRandomIntInclusive(0, indexes.length - 1)];
      // 实时天气
      const { sendibleTemp, temp, weather: wea, wD, wS } = realtime;
      const data = {
        weathers,
        content,
        name,
        level,
        temp,
        sendibleTemp,
        wea,
        wD,
        wS
      };
      return Promise.resolve(data);
    })
    .catch(() => Promise.reject(new Error('获取天气预报异常！')));
}

function getRandomIntInclusive(min: number, max: number): number {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi; // 含最大值，含最小值
}

// 根据消息内容获取天气
async function getWeatherForMsg(): Promise<string> {
  const { content, name, level, temp, sendibleTemp, wea, wD, wS } =
    await getWeatherInfo();
  const msg: any = `🌟当前温度：${temp} ℃\n🌡️体感温度：${sendibleTemp} ℃\n☁️气候：${wea}\n🍃风：${wD} [${wS}]\n${content}\n[${name}：${level}]`;
  return msg;
}

// 定时播报
async function timingBroadcast(): Promise<string> {
  const { weathers, content, temp } = await getWeatherInfo();
  const today = weathers[0];
  const msg = `☀️早上好！\n🍁今天是${today.date} ${today.week}\n🌟温度 ${today.temp_day_c}℃ ~ ${today.temp_night_c}℃ ${today.weather}\n🌡️当前气温 ${temp} ℃\n${content}`;
  return msg;
}

export { getWeatherForMsg, timingBroadcast };
