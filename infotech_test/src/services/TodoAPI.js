import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default class TaskAPI {
  static getTodoList() {
    return Axios.get("todos");
  }

  static updateTodoList(payload) {
    return Axios.put("todos", payload);
  }

  static postTask(payload) {
    return Axios.post("todos", payload);
  }

  static patchTask(payload) {
    return Axios.patch("todos/" + String(payload.id), payload);
  }

  static deleteTask(id) {
    return Axios.delete("todos/" + String(id));
  }
}
