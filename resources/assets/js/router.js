import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home/Index.vue';
import EditorIndex from './components/Editor/Index.vue';
import { SampleIndex, SampleShow, SampleDetail, SampleEdit, SampleConfirm, SampleComplete } from './components/Editor/Sample';

const routes = [
    { path: '/', name: 'Root', component: Home },
    { path: '/editor',
      name: 'EditorIndex',
      component: EditorIndex,
      children: [
          {
              path: 'sample',
              name: 'SampleIndex',
              component: SampleIndex,
              children: [
                  {
                      path: ':id',
                      component: SampleShow,
                      props: route => ({
                          id: Number(route.params.id)
                      }),
                      children: [
                          {
                              path: '',
                              name: 'SampleDetail',
                              component: SampleDetail
                          },
                          {
                              path: 'edit',
                              name: 'SampleEdit',
                              component: SampleEdit
                          },
                          {
                              path: 'confirm',
                              name: 'SampleConfirm',
                              component: SampleConfirm
                          },
                          {
                              path: 'complete',
                              name: 'SampleComplete',
                              component: SampleComplete
                          }
                    ]
                  }
              ]
          }
      ]
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
