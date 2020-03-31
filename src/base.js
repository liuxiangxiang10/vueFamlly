/* 常量 */
import Vue from 'vue'
import VAR from './const'

if (process.env.NODE_ENV !== 'production') {
  let tempArr = []
  for (let key in VAR) {
    tempArr.push({
      key: `$${key}`,
      value: VAR[key]
    })
  }
  // console.log('/* Vue下自定义的变量 */')
  // console.table(tempArr)
}
/* 批量注册常量到Vue对象中 */
for (let key in VAR) {
  Vue[`$${key}`] = Vue.prototype[`$${key}`] = VAR[key]
}
