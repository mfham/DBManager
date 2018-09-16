import sample from '../../apis/sample';

const state = {
    points: {}
};


const getters = {
    getPoints: (state) => {
        return state.points;
    }
};

const actions = {
    get({commit}, data) {
        sample.get(data.id).then(response => {
            commit('setPoints', response.data);
        });
    }
};

const mutations = {
    setPoints(state, payload) {
        state.points = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

