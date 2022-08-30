export interface jsonDataType<T> {
  code: number;
  data: T;
  list: T[];
  message: string;
}
