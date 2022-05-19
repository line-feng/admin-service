import { jsonDataType } from './jsonData.type';
export declare class JsonData {
    private code;
    private data;
    private list;
    private message;
    getCode(): number;
    setCode(code: number): void;
    getData(): Object;
    setData(data: Object): void;
    getList(): [];
    setList(list: []): void;
    getMessage(): string;
    setMessage(message: string): void;
    sendData(): jsonDataType;
}
export { jsonDataType };
