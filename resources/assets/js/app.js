import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import router from './router.js';
import store from './stores';

require('./bootstrap');

Vue.use(VeeValidate);

const app = new Vue({
    el: '#app',
    router,
    store
});
