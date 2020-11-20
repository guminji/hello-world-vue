<template>
  <el-select :value="value" @change="change">
    <el-option v-for="(item,index) in optionList" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "rs-select",
  props:{
    setting:{
      type:Object,
      default:()=>{
        return {}
      }
    },
    value:{
      type:[String,Number],
      default:''
    },
    optionList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  methods:{
    change(value){
      console.log(value)
      this.$emit('input',value)
    }
  }
}
</script>

<style scoped>

</style>