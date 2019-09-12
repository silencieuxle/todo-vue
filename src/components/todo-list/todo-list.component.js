import TodoItem from '../todo-item/todo-item.component.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: ['todos'],
  methods: {
    emitDeleteTodo(id) {
      this.$emit('delete', id);
    },
    emitCompleteTodo(id) {
      this.$emit('complete', id);
    },
  },
};
