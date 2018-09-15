import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home/Index.vue';
import { SampleIndex, SampleSearch, SampleEdit } from './components/Editor/Sample';

const routes = [
    // TOPページ
    { path: '/', name: 'Root', component: Home },
    { path: '/editor',     name: 'SampleIndex', component: SampleIndex },
    { path: '/editor/sample',
      name: 'SampleIndex',
      component: SampleIndex,
      children: [
      ]
    },
    { path: '/editor/:id', name: 'SampleSearch', component: SampleSearch },
    { path: '/editor/:id/edit', name: 'SampleEdit', component: SampleEdit }
];

export default new VueRouter({
    mode: 'history',
    routes
});
