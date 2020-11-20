<template>
  <div class="tal">
    <div v-for="(item) in menuList"  :key="item.path">
      <el-submenu v-if="item.children" :index="item.path">
        <span slot="title" class="tal">
          {{item.name}}
        </span>
        <div v-if="item.children&&item.children.length">
          <menu-node :menuList="item.children"></menu-node>
        </div>
      </el-submenu>
      <el-menu-item v-else :index="item.path">
        <span slot="title" class="tal">
          {{item.name}}
        </span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuNode",
  props:{
    menuList:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>

<style scoped>
.tal{
  text-align: left!important;
}
</style>