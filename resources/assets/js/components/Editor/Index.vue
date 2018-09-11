<template>
<div>
  <h2>検索</h2>
  <div>
    <input v-model="id" type="text" name="title" placeholder="1">
    {{ id }}
    <button v-on:click="searchData">検索</button>
  </div>
  <p>
    {{ points }}
  </p>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    created() {
        console.log('created search compornent.')
    },
    computed: mapState({
        ten: state => state.sample.points
    }),
    data() {
        return {
            id: 101,
            points: {}
        }
    },
    methods: {
        searchData() {
            this.$store.dispatch('sample/get', {id: this.id});
        }
    }
}
</script>
