<template>
  <div id="app">
    <v-header></v-header>
    <section class="main">
      <SideBar></SideBar>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    SideBar,
    Home
  }
}
</script>
<style lang="stylus">
*
  margin: 0
  padding: 0
#app
  .main
    display: flex
    width: 80%
    margin: 20px auto
</style>
