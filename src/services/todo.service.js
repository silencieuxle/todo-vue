import StorageService from './storage.service';
import NotificationService from './notification.service';

const TodoService = {
  apiUrl() {
    return '/api';
  },

  checkAndNotify: function() {
    const todos = TodoService.getTodos(true);

    const today = new Date();

    todos.forEach(todo => {
      const todoRemindDate = new Date(todo.remindDate);
      const todoDueDate = new Date(todo.dueDate);
      const todoRemindTime = todo.remindTime;
      const todoDueTime = todo.dueTime;

      const actions = [
        {
          action: 'completed-action',
          title: 'Completed!',
        },
        {
          action: 'cancelled-action',
          title: 'Cancel the Todo',
        },
      ];

      if (todoRemindDate.getDate() === today.getDate()) {
        if (todoRemindTime === today.getHours() + ':' + today.getMinutes()) {
          NotificationService.sendNotification('HEY, DID YOU COMPLETE THE TASK???', todo.title, actions);
        }
      }

      if (todoDueDate.getDate() === today.getDate()) {
        if (todoDueTime === today.getHours() + ':' + today.getMinutes()) {
          NotificationService.sendNotification('YOU FAILED TO COMPLETE THE TASK!!!', todo.title, actions);
        }
      }
    });
  },

  getTodos(onlyIncompleted = false) {
    let todos = StorageService.get('todos') || [];
    if (onlyIncompleted) {
      todos = todos.filter(t => t.completed === false);
    }
    return todos;
  },

  getTodo(id) {
    const todos = StorageService.get('todos') || [];
    return todos.find(t => t.id === id);
  },

  saveChanges(todos) {
    StorageService.set('todos', todos);
  },

  addTodo(todo) {
    let newTodo = todo;
    let todos = StorageService.get('todos') || [];
    let latestId = 1;
    if (todos.length > 0) {
      latestId = parseInt(todos[todos.length - 1].id) + 1;
    }
    newTodo.id = latestId;
    todos.push(newTodo);
    StorageService.set('todos', todos);
  },

  updateTodo(newTodo) {
    const todos = StorageService.get('todos') || [];
    const todoIndex = todos.findIndex(t => t.id === newTodo.id);

    if (todoIndex >= 0) {
      todos[todoIndex].title = newTodo.title;
      todos[todoIndex].completed = newTodo.completed;
      todos[todoIndex].dateCompleted = newTodo.dateCompleted;

      StorageService.set('todos', todos);
    }
  },

  deleteTodo(id) {
    const todos = StorageService.get('todos') || [];
    const newTodos = todos.filter(todo => todo.id !== id);
    StorageService.set('todos', newTodos);
  },

  markAsCompleted(id) {
    const todos = StorageService.get('todos') || [];
    const todoIndex = todos.findIndex(t => t.id === id);
    todos[todoIndex].completed = true;
    todos[todoIndex].dateCompleted = new Date(Date.now());
    StorageService.set('todos', todos);
  },
};

export default TodoService;
