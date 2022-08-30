import { jsonDataType } from './jsonData.type';

export class JsonData<T> {
  private code: number = 200;
  private data: T = null;
  private list: T[] = [];
  private message: string = 'success';
  private total: number = null;
  private currPage: number = null;

  getCode(): number {
    return this.code;
  }
  setCode(code: number) {
    this.code = code;
  }
  getData(): Object {
    return this.data;
  }
  setData(data: T) {
    this.data = data;
  }
  getList(): T[] {
    return this.list;
  }
  setList(list: T[]) {
    this.list = list;
  }
  getMessage(): string {
    return this.message;
  }
  setMessage(message: string) {
    this.message = message;
  }
  getTotal(): number {
    return this.total;
  }
  setTotal(total: number) {
    this.total = total;
  }
  getCurrPage(): number {
    return this.currPage;
  }
  setCurrPage(currPage: number) {
    this.currPage = currPage;
  }
  sendData(): jsonDataType<T> {
    return {
      code: this.code,
      data: this.data,
      list: this.list,
      message: this.message,
    };
  }
}

export { jsonDataType };
