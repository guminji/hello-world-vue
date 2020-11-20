<template>
    <div>
      <!-- 输入框 -->
      <template v-if="setting.type == 'input'">
        <el-input v-model="formData[setting.key]" v-bind="setting" v-on="setting.on" style="width:100%">
          <template slot="append" v-if="setting.append">
            <div v-html="setting.appendContent"></div>
          </template>
        </el-input>
      </template>
    </div>
</template>
<!-- 表单控件 -->
<script>
export default {
  name: "formComponents",
  props:{
    setting:{
      type:Object,
      default:()=>{
        return {}
      }
    },
    formData:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>