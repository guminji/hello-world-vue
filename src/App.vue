<template>
  <div id="app">
    <div class="leftNav">
      <base-menu :menuList="menuList"></base-menu>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BaseMenu from "@/components/menu/menu";
import menuList from "@/router/routes"

export default {
  name: 'app',
  data(){
    return {
      menuList
    }
  },
  components: {
    BaseMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.leftNav{
  position:fixed;
  top:0;
  bottom:0;
  width: 200px;
}
.container{
  margin-left: 200px;
}
</style>
