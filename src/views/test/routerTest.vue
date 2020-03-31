<template>
  <div>
    <div class="routerTest">routerTest! Success!</div>
  </div>
</template>

<script>
import api from './api'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log('$HTTPCLINT_URL>>>', this.$HTTPCLINT_URL)
    api.check({
      mobile: '18912619411'
    }).then(res => {
      console.log('res>>>', res.body)
    })
  }
}
</script>
<style lang="scss" src="./css/routerTest.scss" scoped></style>
