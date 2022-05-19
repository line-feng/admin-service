import { jsonDataType } from './jsonData.type';

export class JsonData {
  private code: number = 200;
  private data: Object = {};
  private list: [] = [];
  private message: string = 'success';

  getCode(): number {
    return this.code;
  }
  setCode(code: number) {
    this.code = code;
  }
  getData(): Object {
    return this.data;
  }
  setData(data: Object) {
    this.data = data;
  }
  getList(): [] {
    return this.list;
  }
  setList(list: []) {
    this.list = list;
  }
  getMessage(): string {
    return this.message;
  }
  setMessage(message: string) {
    this.message = message;
  }
  sendData(): jsonDataType {
    return {
      code: this.code,
      data: this.data,
      list: this.list,
      message: this.message,
    };
  }
}

export { jsonDataType };
