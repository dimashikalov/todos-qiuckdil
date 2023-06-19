<template>
  <v-container>
    <InputForm @addTodo="addTodo" />
    <Todo
      v-for="todo in $store.getters.getAllTodos"
      :todo="todo"
      :key="todo.id"
    />
  </v-container>
</template>

<script>
import Todo from "@/components/todos/Todo.vue";
import InputForm from "@/components/todos/InputForm.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    Todo,
    InputForm,
  },
  data: () => ({
    todos: [],
  }),
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    ...mapMutations(["addTodo", "checkTodo"]),

    addTodo(todo) {
      this.$store.commit("addTodo", todo);
    },

    // checkTodo(todo) {
    //   this.$store.commit("checkTodo", todo);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
