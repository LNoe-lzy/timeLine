<template>
    <section class="home">
        <router-link v-if="$route.path !== '/add'"
                     to="/add"
                     class="createBtn">创建</router-link>
    
        <router-view></router-view>
    
        <section v-for="(list, index) in lists"
                 class="item">
            <span class="cycle"></span>
            <div class="box">
                <span class="triangle"></span>
                <div class="info">{{list.info}}</div>
                <div class="time">{{list.time}}小时</div>
                <span class="removeBtn" @click="removeList(list, index)">X</span>
            </div>
        </section>
    </section>
</template>
<script>
export default {
    name: 'home',
    computed: {
        lists() {
            return this.$store.state.lists
        }
    },
    methods: {
        removeList (list, index) {
            this.$store.dispatch('decrementTime', list.time)
            this.$store.dispatch('removeList', index)
        }
    }
}
</script>
<style lang="stylus">
.home
  margin-left: 20px
  .createBtn 
    color: #fff
    padding: 5px 10px
    background: #19CAAD
    border-radius: 3px
    text-decoration: none
  .item
    display: flex
    margin-top: 20px 
    align-items: center
    .cycle
       display: block
       width: 20px
       height: 20px
       background: #19CAAD  
       border-radius: 50%
    .box
      display: flex
      flex-direction: column
      margin-left: 50px
      padding: 10px 45px 10px 20px
      background: #BEE7E9
      position: relative
      border-radius: 5px
      .triangle
        display: block
        width: 0
        height: 0
        border-right: 10px solid #BEE7E9
        border-top: 10px solid transparent
        border-bottom: 10px solid transparent
        position: absolute
        left: -10px
        top: 50%
        margin-top: -10px;
      .time
        font-weight: 100
        font-size: 14px
        margin-top: 20px
      .removeBtn  
        position: absolute
        right: 10px
        top: 10px
        cursor: pointer
        display: block
        width: 20px;
        height: 20px;
        font-size: 14px;
        text-align: center
        background: #F4606C
        color: #ffffff
        border-radius: 5px

</style>