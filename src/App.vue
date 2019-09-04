<template>
  <div id="app">
    <!-- getters -->
    <!-- App.vue:{{count}}
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>-->

    <!-- <Count /> -->

    <!-- mutations -->
    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>

    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">fetchData</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // methods: mapMutations(["incrementCount", "decrementCount"])
  /* computed: {
    count() {
      return this.$store.getters.getCount;
    },
    completedTodos() {
      return this.$store.getters.completedTodos;
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount;
    },
    getTodosById() {
      return this.$store.getters.getTodosById;
    }
  }*/
  /* methods: {
    increment() {
      // 调用mutations里的incrementsCount
      this.$store.commit("incremnetCount");
    },
    decrement(n) {
      //第一个参数，调用的名字，第二个参数，传递的参数
      this.$store.commit("decrementCount", n);
    }
  }*/
  /*methods: {
    incrementCount() {
      //触发actions
      this.$store.dispatch("incrementCountAsync");
    },
    decrementCount(n) {
      this.$store.dispatch("decrementCountAsync", n);
    },
    fetchData() {
      //触发actions
      this.$store.dispatch("fetchDataAsync");
    }
  } */
};
</script>

<style>
</style>
