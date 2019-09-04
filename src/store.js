import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  getters: {
    count: state => state.count,
    /* count(state) {
       return ++state.count
     }*/
    completedTodos: state => state.todos.filter(todo => todo.completed),
    /* completedTodos: function (state) {
       return state.todos.filter(function (todo) {
         return todo.completed;
       })
     }*/
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    /*completedTodosCount: function (state, getters) {
      return getters.completedTodos.length
    }*/
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  // 异步请求
  actions: {
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
    //es9的语法
    async fetchDataAsync(context) {
      // await在异步函数中使用，主要修饰请求的东西，如果这行数据没有请求结束，下一行不运行，解决异步出现混乱的情况
      // 完美异步  async await
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
      // console.log(response);
      context.commit("setTodos", response.data)
    }
  }
})
