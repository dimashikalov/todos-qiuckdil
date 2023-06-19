<template>
  <div class="wrapper">
    <div><v-checkbox v-model="checkbox"></v-checkbox></div>
    <div>{{ todo.id + ". " + todo.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}
</style>
