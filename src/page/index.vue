<template>
  <div>
    <div>{{formObject.formData}}</div>
    <div>111</div>
    <SearchDialog v-bind="formObject" :formDatas="formObject.formData">
      <div>
        default
      </div>
      <div slot="formSlot">
        <div slot="test">
          我是test
        </div>
        <div slot="test1">
          <el-form-item label={test1} prop='test1'>
            <el-input placeholder="请输入test1" v-model="formObject.formData.test1"></el-input>
          </el-form-item>
        </div>
      </div>
    </SearchDialog>
  </div>
</template>

<script>
// import rsForm from "@/components/form/BaseForm";
import SearchDialog from "@/components/form/SearchDialog";
export default {
  name: "index",
  components:{
    // rsForm,
    SearchDialog
  },
  methods:{
    fetch
  },
  updated(){
    console.log('index更新')
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
          select:1,
          test1:''
        },
        formRules:{
          name:[{ required: true, message: '请输入活动名称', trigger: 'change' }],
          test1:[{ required: true, message: '请输入活动名称', trigger: 'change' }],

        }
      }
    }
  }


}
</script>

<style scoped>

</style>