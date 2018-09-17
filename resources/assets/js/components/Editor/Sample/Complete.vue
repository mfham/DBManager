<template>
<div>
  <div>
    complete
  </div>
  <div>
    <router-link v-bind:to="{name: 'SampleIndex'}">Top</router-link>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default {
    created() {
        console.log('created Edit compornent.')
    },
    computed: mapState('sample', [
    ]),
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
