import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import StorageSevice from '../services/storage.service';

export const store = new Vuex.Store({
  state: {
    todos: [],
    filter: 'all',
    latestId: 1,
  },
  getters: {
    filteredTodos: state => (searchQuery, showCompleted) => {
      let todos = [];
      if (searchQuery.includes('@completed')) {
        todos = state.todos.filter(t => t.title.includes(searchQuery.replace('@', '')) || t.completed == true);
      } else if (searchQuery.includes('@notcompleted')) {
        todos = state.todos.filter(t => t.title.includes(searchQuery.replace('@', '')) || t.completed == false);
      } else {
        todos = state.todos.filter(t => t.title.includes(searchQuery));
      }
      if (showCompleted == false) {
        todos = todos.filter(t => t.completed == false);
      }
      return todos;
    },
    completedTodos: function(state) {
      return state.todos.filter(t => t.completed == true);
    },
    incompletedTodos: function(state) {
      return state.todos.filter(t => t.completed == false);
    },
    all: function(state) {
      return state.todos;
    },
  },
  mutations: {
    create: function(state, newTodo) {
      const todos = StorageSevice.get('todos') || [];
      todos.push({
        completed: newTodo.completed,
        dateCompleted: newTodo.dateCompleted,
        dateCreated: newTodo.dateCreated,
        dueDate: newTodo.dueDate,
        dueTime: newTodo.dueTime,
        remindDate: newTodo.remindDate,
        remindTime: newTodo.remindTime,
        id: state.latestId,
        title: newTodo.title,
      });
      StorageSevice.set('todos', todos);
    },
    read: function(state) {
      const todos = StorageSevice.get('todos') || [];
      state.todos = todos.sort(compareValues('id', 'desc'));
      state.latestId = todos.length + 1;
    },
    update: function(state, updatedTodo) {
      const index = state.todos.findIndex(t => t.id == updatedTodo.id);
      if (index > -1) {
        state.todos[index].title = updatedTodo.title;
      }
      StorageSevice.set('todos', state.todos);
    },
    remove: function(state, id) {
      const index = state.todos.findIndex(t => t.id == id);
      state.todos.splice(index, 1);
      StorageSevice.set('todos', state.todos);
    },
    toggleCompleted: function(state, id) {
      const index = state.todos.findIndex(t => t.id == id);
      if (index > -1) {
        const isCompleted = state.todos[index].completed;
        if (isCompleted) {
          state.todos[index].completed = false;
          state.todos[index].dateCompleted = null;
        } else {
          state.todos[index].completed = true;
          state.todos[index].dateCompleted = new Date(Date.now());
        }
      }
      StorageSevice.set('todos', state.todos);
    },
  },
  actions: {
    create: function(context, newTodo) {
      context.commit('create', newTodo);
      context.commit('read');
    },
    update: function(context, updatedTodo) {
      context.commit('update', updatedTodo);
    },
    read: function(context) {
      context.commit('read');
    },
    remove: function(context, id) {
      context.commit('remove', id);
      context.commit('read');
    },
    toggleCompleted: function(context, id) {
      context.commit('toggleCompleted', id);
    },
  },
});

function compareValues(key, order = 'asc') {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == 'desc' ? comparison * -1 : comparison;
  };
}
