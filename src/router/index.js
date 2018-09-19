import Vue from 'vue'
import Router from 'vue-router'
import DatePicker from '../components/DatePicker';
import DraggableCal from 'vue-draggable-cal';
import BootstrapVue from 'bootstrap-vue';
import ServiceList from '../components/ServiceList';
import OpenServiceList from '../components/OpenServiceList';
import * as uiv from 'uiv';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(DraggableCal);
Vue.use(ServiceList);
Vue.use(OpenServiceList);
Vue.use(uiv);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DatePicker',
      component: DatePicker
    },
    {
      path: '/service',
      name: 'OpenServiceList',
      component: OpenServiceList
    }
  ]
})
