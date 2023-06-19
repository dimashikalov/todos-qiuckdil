export default {
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, payload) {
      return (state.todos = payload);
    },
    addTodo(state, payload) {
      state.todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    checkTodo(state, payload) {
      state.todos.map((t) => {
        if (t.id === payload.id) {
          t.completed = payload.completed;
          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      });
    },

    updateTodo(state, payload) {
      let { id, title } = payload;
      state.todos.map((t) => {
        if (t.id === id) {
          t.title = title;
          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      });
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((t) => t.id !== payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },

  getters: {
    getAllTodos(state) {
      return state.todos;
    },
  },
  actions: {
    fetchTodos(context) {
      if (localStorage.getItem("todos")) {
        try {
          let lsTodos = JSON.parse(localStorage.getItem("todos"));
          context.commit("setTodos", lsTodos);
        } catch (error) {
          console.log("err ", error);
        }
      }
    },
  },
};
