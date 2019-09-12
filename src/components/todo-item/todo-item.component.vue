<template>
  <b-list-group-item :class="{ 'text-muted': todo.completed }" class="d-flex justify-content-between align-items-center todo-item text-dark">
    <b-checkbox :checked="todo.completed" v-model="todo.completed" @change="toggleCompleted" />
    <p class="todo-title mb-0">
      <label class="title" v-if="editing == false && !todo.completed" @click="editing = true">{{ todo.title }}</label>
      <label class="title strikethrough" v-if="editing == false && todo.completed" @click="editing = true">
        <del>{{ todo.title }}</del>
      </label>
      <br v-if="editing == false" />
      <b-input
        v-if="editing == true"
        @blur="validate"
        size="sm"
        type="text"
        v-model="todo.title"
        @keyup.enter="validate"
        :state="todo.title.length > 0"
      ></b-input>
      <i>
        <small v-if="!todo.completed">Created on: {{ todo.dateCreated | datetime }}</small>
        <small v-if="todo.completed">Completed on: {{ todo.dateCompleted | datetime }}</small>
      </i>
    </p>
    <b-button @click="remove" variant="outline-danger" size="sm" class="btn-rounded">
      <font-awesome-icon fas icon="trash-alt" class="red" />
    </b-button>
  </b-list-group-item>
</template>

<script src="./todo-item.component.js"></script>
<style scoped src="./todo-item.component.css"></style>
