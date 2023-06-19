<template>
  <div class="wrapper">
    <div>
      <v-checkbox v-model="check" @change="checkTodo"></v-checkbox>
    </div>
    <div>{{ todo.title }}</div>
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
  data: function () {
    return { check: this.todo.completed };
  },

  methods: {
    checkTodo() {
      let todo = {
        ...this.todo,
        completed: !this.todo.completed,
      };
      this.$emit("checkTodo", todo);
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
