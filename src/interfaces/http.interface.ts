export interface IResponse<T> {
  success: boolean;
  info: string;
  data: T;
}
