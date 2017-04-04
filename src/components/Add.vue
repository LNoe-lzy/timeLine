<template>
    <section class="add">
        <input type="text"
               placeholder="请输入内容..."
               v-model="info">
        <input type="text"
               placeholder="请输入时间..."
               v-model="time">
        <button @click="addList">创建</button>
    </section>
</template>
<script>
export default {
    name: 'add',
    data() {
        return {
            info: '',
            time: 0
        }
    },
    methods: {
        addList () {
            this.$store.dispatch('addList', {
                info: this.info,
                time: this.time
            })
            this.$store.dispatch('incrementTime', this.time)
            this.info = ''
            this.time = 0
        }
    }
}
</script>
<style lang="stylus">
.add
  display: flex
  flex-direction: column
  input
    margin-bottom: 10px
    padding: 10px
    border-radius: 5px
    border: 1px solid #ededed
    outline: none
  button
    padding: 10px
    border-radius: 5px
    border: none
    color: #fff
    background: #19CAAD
    cursor: pointer
</style>