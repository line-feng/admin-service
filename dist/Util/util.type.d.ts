export interface utilType<T> {
    jsonData: JsonData<T>;
}
export interface JsonData<T> {
    code: number;
    list?: T[];
    data?: T;
    message: string;
}
