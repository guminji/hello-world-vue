<template>
  <div>
    <rs-form v-bind="formObject">
      <div slot="test">
        我是test
      </div>
      <div slot="test1">
        <el-input placeholder="请输入test1"></el-input>
      </div>
    </rs-form>
  </div>
</template>

<script>
import rsForm from "@/components/form/form";
export default {
  name: "index",
  components:{
    rsForm
  },
  data(){
    return {
      formObject:{
        formList:[
            {
              type:'el-input',
              key:'name',
              label:'姓名',
              on:{
                change(){
                  console.log('发生变化')
                }
              }
            },
            {
              type:'rs-select',
              key:'select',
              label:'选择',
              optionList:[
                {label:'选项1',value:1},
                {label:'选项2',value:2}
              ],
              on:{
                change(){
                  console.log('发生变化')
                }
              }
            },
            {
              type:'slot',
              name:'test'
            },
            {
              type:'slot',
              name:'test1'
            }
        ],
        formData:{
          name:'test1',
          select:1
        }
      }
    }
  }


}
</script>

<style scoped>

</style>