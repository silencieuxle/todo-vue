export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      editing: false,
      originalData: this.todo,
    };
  },
  methods: {
    toggleCompleted: function() {
      this.$store.dispatch('toggleCompleted', this.todo.id);
    },
    remove: function() {
      this.$store.dispatch('remove', this.todo.id);
    },
    edit: function() {
      this.todo.editing = true;
    },
    validate: function() {
      if (this.todo.title.length <= 0) {
        this.todo.title = this.originalData.title;
      } else {
        this.editing = false;
        this.$store.dispatch('update', this.todo);
      }
    },
  },
};
