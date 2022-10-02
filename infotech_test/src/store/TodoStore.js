import TaskModel from "../models/TaskModel";
import TodoAPI from "@/services/TodoAPI";

const state = {
  todoList: [],
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
        state.todoList.push(new TaskModel(todo));
      });
    }
  },

  ADD_TASK: (state, newTask) => {
    state.todoList.push(new TaskModel({ newTask }));
  },
};

const actions = {
  loadTodoList: (context) => {
    return TodoAPI.getTodoList().then((response) => {
      context.commit("LOAD_TODO_LIST", response.data);
      console.log(response.data);
    });
  },
  postTask: (context, payload) => {
    console.log(payload);
    return TodoAPI.postTask(payload).then((response) => {
      context.dispatch("loadTodoList");
      console.log(response.data);
    });
  },
  editTask: (context, payload) => {
    console.log(payload);
    return TodoAPI.patchTask(payload).then((response) => {
      context.dispatch("loadTodoList");
      console.log(response.data);
    });
  },
  deleteTask: (context, id) => {
    return TodoAPI.deleteTask(id).then(() => {
      context.dispatch("loadTodoList");
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
