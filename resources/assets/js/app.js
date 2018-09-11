import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './stores'
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

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        // TOPページ
        {path: '/', component: require('./components/Home/Index.vue')},
        {path: '/editor', component: require('./components/Editor/Index.vue')},
        {path: '/editor/:id', component: require('./components/Editor/Search.vue')},
        {path: '/editor/:id/edit', component: require('./components/Editor/Edit.vue')},
    ]
});

const app = new Vue({
    el: '#app',
    router,
    store
});

