import AdvancedTodoModal from '../modals/advanced-todo/advanced-todo.component.vue';
import ModalRegister from '../modals/modal.register.js';

export default {
  name: 'NewTodo',
  components: {
    AdvancedTodoModal,
  },
  data() {
    return {
      title: '',
    };
  },
  methods: {
    create: function() {
      if (this.title.trim() === '') {
        return;
      }
      const newTodo = {
        title: this.title,
        completed: false,
        dateCreated: new Date(Date.now()),
        dateCompleted: null,
        dueDate: null,
        dueTime: null,
        remindDate: null,
        remindTime: null,
      };
      this.$store.dispatch('create', newTodo);
      this.title = '';
    },
    openAdvancedModal: function() {
      this.$bvModal.show(ModalRegister.AdvancedTodoModal);
    },
  },
};
