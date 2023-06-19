<template>
  <v-container>
    <v-btn outlined class="ml-4" text>
      <router-link style="text-decoration: none; color: inherit" to="/"
        >Перейти на главную страницу</router-link
      >
    </v-btn>
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
