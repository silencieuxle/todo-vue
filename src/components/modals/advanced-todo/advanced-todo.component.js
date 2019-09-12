export default {
  name: 'AdvancedTodoModal',
  props: ['newTitle'],
  data() {
    return {
      formData: {
        title: '',
        dueDate: '',
        dueTime: '',
        remindDate: '',
        remindTime: '',
      },
    };
  },
  methods: {
    create: function() {
      if (this.formData.title.trim() === '') {
        return;
      }
      let todo = {
        completed: false,
        dateCreated: new Date(Date.now()),
        dateCompleted: null,
        title: this.formData.title,
        dueDate: new Date(this.formData.dueDate),
        dueTime: this.formData.dueTime,
        remindDate: new Date(this.formData.remindDate),
        remindTime: this.formData.remindTime,
      };
      this.$store.dispatch('create', todo);
      this.$bvModal.hide('advancedTodoModal');
    },
    close: function() {
      this.$bvModal.hide('advancedTodoModal');
    },
    setData: function() {
      this.formData.title = this.newTitle;
    },
  },
};
