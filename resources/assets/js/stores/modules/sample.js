import Vue from 'vue';
import sample from '../../apis/sample';

const state = {
    points_old: {},
    points_new: {},
    columns: {
        'id': {
            'validation': 'integer|between:1,5'
        },
        'name': {
            'validation': 'alpha'
        },
        'point': {
            'validation': 'integer|between:1,3'
        }
    }
};


const getters = {
    getOldPoints: (state) => {
        return state.points_old;
    },
    getNewPoints: (state) => {
        return state.points_new;
    }
};

const actions = {
    set({commit}, data) {
        sample.get(data.id).then(response => {
            commit('setOldPoints', response.data);
            commit('setNewPoints', JSON.parse(JSON.stringify(response.data)));
        });
    },
    updateNewPoints({commit}, data) {
        commit('setNewPoints', data);
    },
    save({commit}, data) {
        sample.save(data.id, data.columns).then(response => {
            console.log('save');
        });
    }
};

const mutations = {
    setOldPoints(state, payload) {
        state.points_old = payload;
    },
    setNewPoints(state, payload) {
        for (const key in payload) {
            Vue.set(state.points_new, key, payload[key]);
        }
        //state.points_new = payload;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

