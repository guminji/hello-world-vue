import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/renderRoutes'
import rsSelect from "@/components/form/rs-select";

Vue.config.productionTip = false
Vue.use(rsSelect);


router.beforeEach((to, from, next) => {
  // VueObject.message.info(to);
  // console.log(window.VueObject.constructor.prototype.$message);
  console.log('to',to);
  if(to.meta&&to.meta.keepAlive) {
    to.meta.keepAlive = true
  } else {
    to.meta.keepAlive = false
  }
  next();
})

window.VueObject = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

console.log('VueObject',window.VueObject);

