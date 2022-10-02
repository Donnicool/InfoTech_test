export default class TaskModel {
  constructor(task = defaultTaskModel) {
    this.id = task.id;
    this.number = task.number;
    this.author = task.author ?? defaultTaskModel.author;
    this.title = task.title ?? defaultTaskModel.title;
    this.completed = task.completed ?? defaultTaskModel.completed;
  }
}

let defaultTaskModel = {
  id: null,
  number: {},
  author: "",
  title: "",
  completed: false,
};
