
<!-- 表单控件 -->
<script>
import rsSelect from "@/components/form/rs-select";
export default {
  name: "formComponents",
  components:{
    rsSelect
  },
  props:{
    value:{
      type:[String,Number],
      default:''
    },
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
  },

  render(h){
    return h(this.setting.type,{props:{value:this.value,...this.setting},on: {
        input: (value)=>{
          console.log('emit input出来',value)
          this.$emit('input', value)
        },
        ...(this.setting.on||{})
      }},this.$slots.default)
  }
}
</script>

<style scoped>

</style>