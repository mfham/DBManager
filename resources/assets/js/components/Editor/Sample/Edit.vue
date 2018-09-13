<template>
<div>
  <h2>検索</h2>
  <div>
    <input v-model="id" type="text" name="title" placeholder="1">
    <p>{{ id }}</p>

    <button v-on:click="searchData">検索</button>
  </div>
  <p>
    search data
  </p>
</div>
</template>

<script>
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
            var id = 1
            axios.post('/api/sample/' + id).then(res => {
                console.log(res.data.id)
            })
        }
    }
}
</script>
