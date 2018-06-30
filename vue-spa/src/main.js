import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


var  extend=Vue.extend({
   render:(h)=>{return(
     <div>123</div>
    )},
   data(){return{
      extend:'extend'
   }}
});

Vue.component("extend",extend);


Vue.mixin({data(){
  return{
    mix:"vue mix"
  }
}})
new Vue({
  render: h => h(App)
}).$mount('#app')
