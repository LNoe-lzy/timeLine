<template>
    <section class="sidebar">
        <div class="top">总时长</div>
        <div class="bottom">{{time}}小时</div>
    </section>
</template>
<script>
export default {
    name: 'sidebar',
    computed: {
        time () {
            return this.$store.state.totalTime
        }
    }
}
</script>
<style lang="stylus">
.sidebar
   width: 20%
   border: 1px solid #d3d3d3
   border-radius: 5px
   display: flex
   flex-direction: column
   align-items: center
   over-flow: hidden
  .top
    font-size: 24px
    box-sizing: border-box
    padding: 10px 0
    border-bottom: 1px solid #d3d3d3
    width: 100%
    text-align: center
    background: #ededed
    font-weight: 100
  .bottom
    padding: 10px 0
    font-weight: 100  
</style>