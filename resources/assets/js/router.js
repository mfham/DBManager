import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home/Index.vue';
import EditorIndex from './components/Editor/Index.vue';
import { SampleIndex, SampleShow, SampleEdit } from './components/Editor/Sample';

const routes = [
    { path: '/', name: 'Root', component: Home },
    { path: '/editor',     name: 'EditorIndex', component: EditorIndex },
    { path: '/editor/sample',
      name: 'SampleIndex',
      component: SampleIndex,
      children: [
          
      ]
    },
    { path: '/editor/:id', name: 'SampleShow', component: SampleShow },
    { path: '/editor/:id/edit', name: 'SampleEdit', component: SampleEdit }
];

export default new VueRouter({
    mode: 'history',
    routes
});
