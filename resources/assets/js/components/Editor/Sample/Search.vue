<template>
<div>
  <input v-model="id" type="text" name="title" placeholder="1">
  <button v-on:click="searchData">検索</button>
</div>
</template>

<script>
export default {
    created() {
        console.log('created search compornent.')
    },
    data() {
        return {
            id: 1
        }
    },
    methods: {
        searchData() {
            this.$store.dispatch('sample/get', {id: this.id});
            this.$router.push({name: 'SampleShow', params: {id: this.id}});
        }
    }
}
</script>
