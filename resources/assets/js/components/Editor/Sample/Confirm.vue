<template>
<div>
  <div class="content">
    <div class="item" v-for="col in columns">
      <div class="column name">{{ col }}</div>
      <div class="column beforeEditing">{{ points_old[col] }}</div>
      <div class="column editing">{{ points_new[col]}}</div>
    </div>
  </div>
  <div>
    <ul>
      <li><router-link v-on:click.native="saveNewPoints()" v-bind:to="{name: 'SampleComplete'}">Complete</router-link></li>
      <li><router-link v-bind:to="{name: 'SampleEdit'}">Back</router-link></li>
    </ul>
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
    props: {
        id: {
            type: Number
        }
    },
    computed: mapState('sample', [
        'points_old',
        'points_new'
    ]),
    data() {
        return {
            columns: ['id', 'name', 'point']
        }
    },
    methods: {
        saveNewPoints() {
            this.$store.dispatch('sample/save', {id: this.id, columns: _.omit(this.points_new, ['id'])});
        }
    }
}
</script>
<style scoped>
  * {
  box-sizing: border-box;
  
  }
  .content {
  width: 900px;
  margin: 20px;
  
  }
  .item {
  display: flex;
  
  }
  .item + .item {
  margin-top: -1px;
  
  }

  .item .column {
  border: 1px solid #000;
  width: 200px;
  
  }
  .item .beforeEditing,
  .item .editing {
  flex-grow: 1;
  
  }
  .item .editing input:focus {
  background-color: #fff282;
  
  }
  .item input {
  -webkit-appearance: none;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: inherit;
  
  }
  .item .name {
  font-weight: bold;
  
  }
  .item .name,
  .item .beforeEditing {
  margin-right: -1px;
  padding: .5em;
  
  }
  .item .editing input {
  padding: .5em;
  
  }
  
</style>
