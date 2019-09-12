import { setInterval } from 'timers';

import TodoService from '../../services/todo.service';

import SearchTodo from '../../components/search-todo.component.vue';
import TodoList from '../../components/todo-list/todo-list.component.vue';
import NewTodo from '../../components/new-todo/new-todo.component.vue';

export default {
  name: 'Todo',
  components: {
    SearchTodo,
    TodoList,
    NewTodo,
  },
  data() {
    return {
      showCompleted: true,
      searchQuery: '',
    };
  },
  computed: {
    filteredTodos: {
      get: function() {
        return this.$store.getters.filteredTodos(this.searchQuery, this.showCompleted) || [];
      },
      set: function() {},
    },
  },
  methods: {
    deleteTodo: function(id) {
      this.$store.dispatch('remove', id);
    },
    markAsCompleted: function(id) {
      this.$store.dispatch('markAsCompleted', id);
    },
    updateTodo: function(updatedTodo) {
      this.$store.dispatch('update', updatedTodo);
    },
    searchTodo: function(val) {
      this.searchQuery = val;
    },
    filterTodo: function() {
      this.filteredTodos = this.$store.getters.filteredTodos(this.searchQuery, this.showCompleted);
    },
  },
  watch: {
    showCompleted: function(val) {
      if (val === true) {
        this.filteredTodos = this.$store.getters.filteredTodos(this.searchQuery, this.showCompleted);
      }
    },
  },
  created() {
    this.$store.dispatch('read');
    setInterval(TodoService.checkDueTimeAndNotify, 60000);
  },
};
