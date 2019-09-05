const state = {
    count: 0,
};
const getters = {
    count: state => state.count,
    /* count(state) {
       return ++state.count
     }*/
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
};
const actions = {
    incrementCountAsync: ({ commit }) => {
        setTimeout(() => {
            /* 解构
            const object={
            name:"米斯特吴"，
            age:20
            }
            
            const{name,age}=object
            */
            //  context/*=this.$store*/.
            commit("incrementCount")
        }, 2000);
    },
    decrementCountAsync: (context, payload) => {
        setTimeout(() => {
            context/*=this.$store*/.commit("decrementCount", payload)
        }, 1000);
    },
};

export default {
    state, getters, mutations, actions
}