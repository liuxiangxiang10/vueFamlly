let HTTPCLINT_URL = ''
let SERVICE_BASE_URL = '/h5_gateway'
switch (location.host) {
  case 'localhost:8089': // 开发环境
  case '0.0.0.0:8089':
    HTTPCLINT_URL = 'localhost:8089';
    break;
  default:
    HTTPCLINT_URL = 'https://mh5.bl.com' // 生产环境
    break;
}

export default {
  HTTPCLINT_URL, // 接口请求前缀
  SERVICE_BASE_URL
}
