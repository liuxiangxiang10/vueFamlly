<template>
  <div>routerTest! Success!</div>
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
    })
  }
}
</script>

<style>

</style>
