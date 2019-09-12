<template>
  <div>
    <b-list-group class="scrollable-list" flush>
      <transition-group name="list">
        <TodoItem :todo="todo" v-for="todo in todos" :key="todo.id" />
      </transition-group>
      <b-list-group-item v-if="todos.length == 0" class="list-item-no-data">Awesome, there is no todo!</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script src="./todo-list.component.js"></script>
<style scoped src="./todo-list.component.css"></style>
