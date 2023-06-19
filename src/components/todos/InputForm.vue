<template>
  <v-container>
    <v-row class="d-flex, align-center">
      <v-text-field v-model="title" />
      <v-btn class="ml-4" @click="addTodo">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    addTodo() {
      let todo = {
        id: Date.now(),
        title: this.title,
        completed: false,
      };
      this.$emit("addTodo", todo);
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
