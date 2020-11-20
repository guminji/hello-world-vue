<script>
import formComponents from "@/components/form/formComponents";
export default {
  name: "rsForm",
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
  render(){
    let {
      formList,
      formData
    } = this;


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
            {formList.map((item)=>{
              return (
                  <el-form-item label={item.label} >
                    <form-components setting={item} formData={formData}></form-components>
                  </el-form-item>
              )
            })}
          </el-form>
    )
  }
}
</script>

<style scoped>

</style>