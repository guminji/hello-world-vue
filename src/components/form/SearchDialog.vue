<script>
import BaseForm from "@/components/form/BaseForm";
export default {
  name: "SearchDialog",
  components:{
    BaseForm
  },
  props:{
    item:{
      type:String,
      default:'test'
    },
    formDatas:{
      type:Object
    },
  },
  updated(){
    console.log('searchDialog更新')
  },
  methods:{
    validate(){
      console.log('确认',this.$refs.form)
      // this.$refs.form
    }
  },
  render(h,content){
    console.log(this.$attrs)
    console.log('this.$slots',this.$slots)
    console.log('content',content)

    function renderSlots(slots){
      return slots.map((item)=>{
        return h('div',{...item.data},[item])
      })
    }
    let props = {
      props:this.$attrs
    };
    return(
        <div>
          <p>{this.item}</p>
          <base-form {...props} ref="form">
            {this.$slots['formSlot']?renderSlots(this.$slots['formSlot'][0].children):""}
          </base-form>
          <el-button on-click={this.validate}></el-button>
        </div>
    )
  }
}
</script>

<style scoped>

</style>