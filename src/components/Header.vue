<template>
    <header>
        <div>TimeLine</div>
        <router-link to="/">计划列表</router-link>
    </header>
</template>
<script>
export default {
    name: 'header'
}
</script>
<style lang="stylus">
header
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  color: #2c3e50
  display: flex
  padding: 10px 20px
  background-color: #ededed
  div
    margin-right: 20px
  a
    color: #2c3e50
    text-decoration: none
</style>