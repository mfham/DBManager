import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './stores';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);

import Home from './components/Home/Index.vue';
import { SampleIndex, SampleSearch, SampleEdit } from './components/Editor/Sample';
//import SampleIndex from './components/Editor/Sample/Index.vue';
//import SampleSearch from './components/Editor/Sample/Search.vue';
//import SampleEdit   from './components/Editor/Sample/Edit.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        // TOPページ
        { path: '/', name: 'Root', component: Home },
        { path: '/editor',     name: 'SampleIndex', component: SampleIndex },
        { path: '/editor/:id', name: 'SampleSearch', component: SampleSearch },
        { path: '/editor/:id/edit', name: 'SampleEdit', component: SampleEdit },
    ]
});

const app = new Vue({
    el: '#app',
    router,
    store
});
