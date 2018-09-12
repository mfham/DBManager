<template>
<div>
  <input v-model="id" type="text" name="title" placeholder="1">
  <button v-on:click="searchData">検索</button>
</div>
</template>

<script>
import sample from '../../../apis/sample.js';

export default {
    created() {
        console.log('created search compornent.')
    },
    data() {
        return {
            id: ''
        }
    },
    methods: {
        searchData() {
            this.$store.dispatch('sample/get', {id: this.id});
        }
    }
}
</script>
