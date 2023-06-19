<template>
  <div class="wrapper">
    <div>
      <v-checkbox v-model="check" @change="checkTodo"></v-checkbox>
    </div>
    <div @dblclick="updateTodo">{{ todo.title }}</div>
    <v-spacer />
    <v-btn icon small @click="deleteTodo">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
    ...mapMutations(["checkTodo", "updateTodo", "deleteTodo"]),

    checkTodo() {
      let todo = {
        ...this.todo,
        completed: !this.todo.completed,
      };
      this.$store.commit("checkTodo", todo);
    },

    updateTodo() {
      let title = prompt();
      let newTodo = {
        ...this.todo,
        title,
      };
      this.$store.commit("updateTodo", newTodo);
    },

    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
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
