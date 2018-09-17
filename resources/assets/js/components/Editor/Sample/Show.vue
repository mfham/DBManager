<template>
<div>
  <router-view v-bind:id="id"/>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    created() {
        console.log('created Show compornent.')
    },
    props: {
        id: {
            type: Number
        }
    },
    computed: mapState('sample', [
        'points_old'
    ])
}
</script>
