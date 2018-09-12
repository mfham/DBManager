<template>
<div>
  <h2>検索</h2>
  <Search/>
  <p>
    {{ points }}
  </p>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Search from './Search.vue';

Vue.component('Search', Search);

export default {
    created() {
        console.log('created search compornent.')
    },
    computed: mapState({
        ten: state => state.sample.points
    }),
    data() {
        return {
            points: {}
        }
    },
    methods: {
    }
}
</script>
