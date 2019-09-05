const state = {
    todos: [
        { id: 1, title: "todo item 1", completed: false },
        { id: 2, title: "todo item 2", completed: true },
        { id: 3, title: "todo item 3", completed: true },
    ]
};
const getters = {
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
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos
};
// 异步请求
const actions = {
    //es9的语法
    async fetchDataAsync(context) {
        // await在异步函数中使用，主要修饰请求的东西，如果这行数据没有请求结束，下一行不运行，解决异步出现混乱的情况
        // 完美异步  async await
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
        // console.log(response);
        context.commit("setTodos", response.data)
    }
};

export default {
    state, getters, mutations, actions
}