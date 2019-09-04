<template>
  <div id="count">
    <hr />
    <!-- <p>Count.vue:{{todos}}</p> -->
    <!-- <h1>count.vue:{{count}}</h1> -->
  </div>
</template>

<script>
export default {
  name: "Count",
  components: {}
  // 写法三
  //   computed: mapState(["count", "todos"])
  // 写法二
  // computed: mapState({
  //   count: state => state.count,

  //   /*count:function(state){
  //      return state.count
  //    }*/
  //   todos: state => state.todos
  // })

  /* 写法一
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
   }*/
};
</script>

<style>
</style>
