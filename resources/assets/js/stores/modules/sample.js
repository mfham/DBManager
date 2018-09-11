import sample from '../../apis/sample'

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
        sample.get(data.id).then(res => {
            console.log(res.data);
            console.log('aa');
            
            commit('setPoints', res.data);
        });
    }
};

const mutations = {
    setPoints(state, {points}) {
        state.points = points;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

