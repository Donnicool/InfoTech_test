import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default class TaskAPI {
  static getTodoList() {
    return Axios.get("todo");
  }

  static postTask(payload) {
    return Axios.post("todo", payload);
  }

  static patchTask(payload) {
    return Axios.patch("todo/" + String(payload.id), payload);
  }

  static deleteTask(id) {
    return Axios.delete("todo/" + String(id));
  }
}
