<script>
import menuNode from './menuNode'
export default {
  name: "BaseMenu",
  components:{
    menuNode
  },
  data(){
    return {
      fullPath:''
    }
  },
  props:{
    menuList:{
      type:Array,
      default:()=>[]
    }
  },
  watch:{
    $route(to) {
      // 对路由变化作出响应...
      console.log('to',to);
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    console.log(this.$router);
    // this.fullPath = this.$router.app._route.fullPath;
    this.$nextTick(()=>{
      this.fullPath = String.prototype.split.call(location.hash,'#')[1];
      console.log('created',this.fullPath);
    })
  },
  computed:{
    router(){
      return this.$router
    }
  },
  render(){
    console.log('reRender',this.fullPath)
    let {
      handleSelect
    } =this;
    const props = {
      props:{
        menuList:this.menuList,
        'on-select':this.handleSelect

      }
    }
    return (
        <div>
          <el-menu   default-active={this.fullPath} class="el-menu-vertical-demo" on-select={handleSelect}>
            <menuNode {...props}></menuNode>
          </el-menu>
        </div>
    )
  },

}
</script>

<style scoped>

</style>