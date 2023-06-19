<template>
  <v-container>
    <InputForm />
    <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
  </v-container>
</template>

<script>
import Todo from "@/components/todos/Todo.vue";
import InputForm from "@/components/todos/InputForm.vue";

export default {
  components: {
    Todo,
    InputForm,
  },
  data: () => ({
    todos: [
      { id: 1, title: "todo 1", completed: false },
      { id: 2, title: "todo 2", completed: false },
      { id: 3, title: "todo 3", completed: false },
      { id: 4, title: "todo 4", completed: false },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
