<template>
  <v-container>
    <InputForm @addTodo="addTodo" />
    <Todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @checkTodo="checkTodo"
    />
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
    todos: [],
  }),

  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    checkTodo(todo) {
      this.todos.map((t) => {
        if (t.id === todo.id) {
          t.completed = todo.completed;
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      });
    },
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (error) {
        console.log("err ", error);
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
