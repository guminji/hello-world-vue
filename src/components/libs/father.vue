
<script>
import children from './children';
export default {
  name: "father",
  extends:children,
  methods:{
    fetch(){
      console.log('调用子级方法')
      this.init();
    }
  },
  created() {
    this.fetch()
  },

  mounted() {
    // console.log(this.a);
  },


}
</script>

<style scoped>

</style>