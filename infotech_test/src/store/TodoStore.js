import TaskModel from "../models/TaskModel";
import TodoAPI from "@/services/TodoAPI";

const state = {
  todoList: [],
};

const getters = {
  GET_ALL_TODO_LIST: (state) => {
    return state.todoList;
  },
  GET_TODO_LIST: (state) => {
    let unCompletedTodoList = [];
    state.todoList.forEach((todo) => {
      if (!todo.completed) {
        unCompletedTodoList.push(todo);
      }
    });
    unCompletedTodoList.sort((a, b) => a.number.todo - b.number.todo);
    return unCompletedTodoList;
  },
  GET_DONE_LIST: (state) => {
    let CompletedTodoList = [];
    state.todoList.forEach((todo) => {
      if (todo.completed) {
        CompletedTodoList.push(todo);
      }
    });
    CompletedTodoList.sort((a, b) => a.number.done - b.number.done);
    return CompletedTodoList;
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
