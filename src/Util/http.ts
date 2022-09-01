import { http } from './type/type'
// 开发环境
const dev: http = {
    agreement: 'http',
    host: '127.0.0.1',
    port: '9999'
}
// 生产环境
const pro: http = {
    agreement: 'http',
    host: '127.0.0.1',
    port: '9999'
}

const url = true ? dev : pro;

export const getHttp = () => {
    const { host, port, agreement } = url;
    return `${agreement}//:${host}:${port}`
}