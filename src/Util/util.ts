import { getDateAll, numStr } from './type/type';
export class Utils {
  static successCode: number = 200;
  static errorCode: number = 500;
  static loginErrorCode: number = 601;
  static getDateAll(tm: Date | numStr, reg: numStr = ''): getDateAll {
    let type = this.getType(tm),
      timeObj: getDateAll = {};
    if (type !== 'Number' && type !== 'Date') {
      timeObj.state = false;
      timeObj.msg = '时间不是Date类型/时间戳';
      return timeObj;
    }
    tm = new Date(tm);
    let Y = tm.getFullYear(),
      M = this.setNumber(tm.getMonth() + 1),
      D = this.setNumber(tm.getDate()),
      HH = this.setNumber(tm.getHours()),
      MM = this.setNumber(tm.getMinutes()),
      SS = this.setNumber(tm.getSeconds());

    timeObj = {
      YMD: reg ? `${Y}${reg}${M}${reg}${D}` : `${Y}年${M}月${D}日`,
      MD: reg ? `${M}${reg}${D}` : `${M}月${D}日`,
      HMS: `${HH}:${MM}:${SS}`,
      HM: `${HH}:${MM}`,
      state: true,
      msg: null,
    };
    timeObj.YMDHMS = timeObj.YMD + ' ' + timeObj.HMS;
    timeObj.YMDHM = timeObj.YMD + ' ' + timeObj.HM;
    return timeObj;
  }
  static getType(type): string {
    return Object.prototype.toString.call(type).slice(8, -1);
  }
  static setNumber(num: numStr): numStr {
    return num < 10 ? '0' + num : num;
  }
}
