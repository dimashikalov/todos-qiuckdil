<template>
  <v-container fluid>
    <v-app-bar color="light-blue" dark>
      <v-spacer />
      <v-btn outlined class="ml-4">
        <router-link style="text-decoration: none; color: inherit" to="/"
          >Главная</router-link
        >
      </v-btn>
      <v-btn outlined class="ml-4">
        <router-link style="text-decoration: none; color: inherit" to="/todos"
          >Список дел</router-link
        >
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
