let HTTPCLINT_URL = ''

switch (location.host) {
  case 'localhost:8089': // 开发环境
  case '0.0.0.0:8089':
    HTTPCLINT_URL = 'localhost:8089';
    break;
  default:
    HTTPCLINT_URL = 'localhost:8089' // 生产环境
    break;
}

export default {
  HTTPCLINT_URL, // 接口请求前缀
}
