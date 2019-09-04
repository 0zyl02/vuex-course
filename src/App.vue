<template>
  <div id="app">
    <!-- getters -->
    <!-- App.vue:{{count}}
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>-->

    <!-- <Count /> -->

    <!-- mutations -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incremnetCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incremnetCount", "decrementCount"])
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
};
</script>

<style>
</style>
