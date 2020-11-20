<template>
  <div>
    <rs-form v-bind="formObject"></rs-form>
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
              type:'input',
              key:'name',
              label:'姓名'
            },
        ],
        formData:{
          name:'test1'
        }
      }
    }
  }


}
</script>

<style scoped>

</style>