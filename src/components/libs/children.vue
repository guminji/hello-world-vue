
<script>
export default {
  name: "children",
  methods:{
    fetch(){
      console.log('调用父级方法')
    },
    init(){
      console.log(this.a)
    }
  },
  data(){
    return {
      a:1
    }
  },

  render(){
    return (
        <div>{this.a}</div>
    )
  }
}
</script>

<style scoped>

</style>