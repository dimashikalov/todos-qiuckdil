<template>
  <v-container>
    <InputForm />
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
import { mapActions } from "vuex";
export default {
  components: {
    Todo,
    InputForm,
  },
  data: () => ({}),
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
};
</script>

<style lang="scss" scoped></style>
