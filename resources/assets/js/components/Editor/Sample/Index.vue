<template>
<div>
  <Search/>
  <router-view/>
</div>
</template>

<script>
import Vue from 'vue';
import Search from './Search.vue';

Vue.component('Search', Search);

export default {
}
</script>
