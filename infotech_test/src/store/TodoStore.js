import TaskModel from "../models/TaskModel";

const state = {
  todoList: [
    {
      author: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      author: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      author: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      author: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ],
};

const getters = {
  GET_TODO_LIST: (state) => {
    return state.todoList;
  },
};

const mutations = {
  LOAD_TODO_LIST: (state, payload) => {
    state.todoList = [];
    if (payload) {
      payload.forEach((todo) => {
        state.TKRSList.push(new TaskModel(todo));
      });
    }
  },

  ADD_TASK: (state, newTask) => {
    state.todoList.push(new TaskModel({ newTask }));
  },
};

const actions = {
  //   loadTodoList: (context) => {
  //     return TodoAPI.getTodoList().then((response) => {
  //       context.commit("LOAD_TODO_LIST", response.data);
  //       console.log(response.data);
  //     });
  //   },
  //   postTask: (context, newTask) => {
  //     console.log(newTask);
  //     return TodoAPI.postTask(new TaskModel({ newTask }));
  //   },
  //   deleteTask: (context, id) => {
  //     return TodoAPI.deleteTask(id).then(() => {
  //       context.dispatch("LOAD_TODO_LIST");
  //     });
  //   },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
