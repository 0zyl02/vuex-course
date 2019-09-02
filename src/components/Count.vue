<template>
  <div id="count">
    <hr />
    <p>Count.vue:{{todos}}</p>
    <h1>count.vue:{{count}}</h1>
  </div>
</template>

<script>
export default {
  name: "Count",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style>
</style>
