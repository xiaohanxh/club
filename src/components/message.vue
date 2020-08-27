<template>
  <div>{{data}}
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    console.log(this.id)
    return {
      data: {}
    }
  },
  created () {
    const that = this
    this.$http.post('message', { id: this.id }).then(res => {
      console.log(res.data.data)
      that.data = res.data.data
    })
  }
}
</script>
<style scoped>
</style>
