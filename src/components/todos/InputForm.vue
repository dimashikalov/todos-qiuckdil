<template>
  <v-container>
    <v-row class="d-flex, align-center">
      <v-text-field v-model="title" />
      <v-btn class="ml-4" @click="addTodo">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapMutations(["addTodo"]),

    addTodo() {
      if (this.title) {
        let todo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$store.commit("addTodo", todo);
        this.title = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
