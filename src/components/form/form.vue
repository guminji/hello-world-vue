<script>
import formComponents from "@/components/form/formComponents";
import rsSelect from "@/components/form/rs-select";
export default {
  name: "rsForm",
  comments:{
    rsSelect
  },
  props:{
    formList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    formData:{
      type:Object
    }
  },
  methods:{

  },
  components:{
    formComponents
  },
  updated(){
    console.log(this.formData)
  },
  render(h){
    let {
      formList,
      formData
    } = this;

    {console.log(this)}
    return (
          <el-form ref="form"
             {
                ...{
                    props: {
                      model: formData,////vue jsx element 表单校验的model不可以直接写 以这种方式解决

                      }
                    }
             }
             label-width="80px"
             class="demo-form-inline"
          >
            <el-row>
              {formList.map((item)=>{
                return (
                    <el-col span={item.span||12}>
                      {
                        item.type!='slot'?(
                            <el-form-item label={item.label}>
                              <form-components setting={item} formData={formData} v-model={formData[item.key]}></form-components>
                            </el-form-item>
                        ):(h('div',[this.$slots[item.name]]))
                      }
                    </el-col>
                )
              })}
              {console.log(this.$slots.default)}
            </el-row>
          </el-form>
    )
  }
}
</script>

<style scoped>

</style>