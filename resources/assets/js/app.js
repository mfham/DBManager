import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './router.js';
import store from './stores';

require('./bootstrap');

const app = new Vue({
    el: '#app',
    router,
    store
});
