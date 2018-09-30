<template>
<div>
  <div class="content">
    <div class="item" v-for="(setting, col) in columns">
      <div class="column name">{{ col }}</div>
      <div class="column beforeEditing">{{ points_old[col] }}</div>
      <div class="column editing">
        <p>{{ errors.first(col) }}</p>
        <input type="text" v-model="local_points_new[col]" v-bind:placeholder="points_new[col]" v-validate="setting.validation" v-bind:name="col">
      </div>
    </div>
  </div>
  <div>
    <router-link v-on:click.native="updateNewPoints()" v-bind:to="{name: 'SampleConfirm'}">Confirm</router-link>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Search from './Search.vue';

Vue.component('Search', Search);

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
        'points_new',
        'columns'
    ]),
    data() {
        return {
            local_points_new: {
                id: this.id
            }
        }
    },
    methods: {
        updateNewPoints() {
            this.$store.dispatch('sample/updateNewPoints', this.local_points_new);
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
