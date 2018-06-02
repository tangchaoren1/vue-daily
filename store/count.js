const counter = {
    state: {
        count: 1
    },
    mutations: {
        increment(state){
            state.count++
        },
    },
    actions: {
        increment({commit}){
            commit('increment')
        },
    }
}

export default counter;