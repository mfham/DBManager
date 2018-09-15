import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './router.js';
import store from './stores';

require('./bootstrap');

window.Vue = require('vue');

//Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    store
});
