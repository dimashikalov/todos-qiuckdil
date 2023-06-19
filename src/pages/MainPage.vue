<template>
  <v-container>
    <div class="mb-5">
      <v-btn outlined class="ml-4" text>
        <router-link style="text-decoration: none; color: inherit" to="/todos"
          >Перейти к списку дел</router-link
        >
      </v-btn>
    </div>

    <h4>Вводное тестовое задание Quick Deal</h4>
    <p>
      Разработать простое приложение таск-менеджера с использованием Vue 2, vuex
      и vue-router.
    </p>
    <p>Требования</p>
    <ul>
      <li>
        Приложение должно иметь главную страницу и страницу со списком задач
      </li>
      <li>На странице со списком задач должна быть форма создания задачи.</li>
      <li>Задачи можно удалить и отредактировать.</li>
      <li>При обновлении страницы должны отображаться сохранённые задачи.</li>
    </ul>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
