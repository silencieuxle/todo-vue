<template>
  <b-container>
    <b-row class="page-content">
      <b-col col sm="12" md="8" offset-md="2" lg="6" offset-lg="3">
        <SearchTodo @search="searchTodo" />
        <b-card no-body header-tag="header" class="mt-4" border-variant="light" bg-variant="dark" text-variant="white">
          <div slot="header" class="custom-card-header">
            <h5>Todos</h5>
            <b-form-checkbox class="right" switch v-model="showCompleted" @change="showCompleted = !showCompleted">Show Completed</b-form-checkbox>
          </div>
          <TodoList :todos="filteredTodos" />
        </b-card>
        <NewTodo />
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./todo.view.js"></script>
<style scoped src="./todo.view.css"></style>
