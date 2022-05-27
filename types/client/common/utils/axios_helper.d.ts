import { AxiosRequestConfig } from 'axios';
declare const createAxiosRequest: unique symbol;
declare const axiosRequest: unique symbol;
export default class HttpHelper {
    static axiosGet(url: string, params?: {}, timeout?: number, callback?: any): Promise<unknown>;
    static axiosPost(url: string, data?: {}, timeout?: number, callback?: any): Promise<unknown>;
    static [createAxiosRequest](opts: AxiosRequestConfig, callback: any): Promise<unknown>;
    static [axiosRequest](opts: AxiosRequestConfig): Promise<unknown>;
}
export {};
