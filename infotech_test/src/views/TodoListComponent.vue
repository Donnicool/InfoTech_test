<template>
  <div class="main__container">
    <v-row>
      <v-col cols="6" class="pr-8"
        ><div class="mb-8">
          <span class="todo__title__text text-uppercase">To do</span>
        </div>

        <div v-for="item in GET_TODO_LIST" :key="item.id">
          <v-hover v-slot="{ hover }">
            <v-card elevation="1" class="mb-6"
              ><div class="d-flex justify-start">
                <div v-if="hover" class="pa-2 d-flex flex-column">
                  <v-icon color="#1d2939" @click="upTodoTask(item)"
                    >mdi-arrow-up</v-icon
                  >
                  <v-spacer></v-spacer>
                  <v-icon color="#1d2939" @click="downTodoTask(item)"
                    >mdi-arrow-down</v-icon
                  >
                </div>
                <div>
                  <v-card-title class="todo__card__title__text mb-2">{{
                    item.title
                  }}</v-card-title
                  ><v-card-subtitle class="todo__card__author__text"
                    >Created by:
                    <span style="font-weight: 700">{{
                      item.author
                    }}</span></v-card-subtitle
                  >
                </div>
                <v-spacer></v-spacer>
                <div v-if="hover" class="pa-2 d-flex flex-column">
                  <v-icon color="#1d2939" @click="editTaskOpen(item)"
                    >mdi-pencil</v-icon
                  >
                  <v-icon
                    color="green darken-3"
                    @click="
                      item.completed = true;
                      item.number.done = GET_DONE_LIST.length;
                      renumberTasksAfterDelete(item, GET_TODO_LIST);
                      editTask(item);
                    "
                    >mdi-check-bold</v-icon
                  >
                  <v-spacer></v-spacer>
                  <v-icon
                    color="red darken-4"
                    @click="deleteTaskFunc(item, GET_TODO_LIST)"
                    >mdi-close</v-icon
                  >
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="mb-8">
          <span class="todo__title__text text-uppercase">Done</span>
        </div>
        <div v-for="item in GET_DONE_LIST" :key="item.id">
          <v-hover v-slot="{ hover }">
            <v-card elevation="1" class="mb-6">
              <div class="d-flex justify-space-between">
                <div v-if="hover" class="pa-2 d-flex flex-column">
                  <v-icon color="#1d2939" @click="upDoneTask(item)"
                    >mdi-arrow-up</v-icon
                  >
                  <v-spacer></v-spacer>
                  <v-icon color="#1d2939" @click="downDoneTask(item)"
                    >mdi-arrow-down</v-icon
                  >
                </div>
                <div>
                  <v-card-title class="todo__card__title__text mb-2">{{
                    item.title
                  }}</v-card-title
                  ><v-card-subtitle class="todo__card__author__text"
                    >Created by:
                    <span style="font-weight: 700">{{
                      item.author
                    }}</span></v-card-subtitle
                  >
                </div>

                <div v-if="hover" class="pa-2 d-flex flex-column">
                  <v-icon color="#1d2939" @click="editTaskOpen(item)"
                    >mdi-pencil</v-icon
                  >
                  <v-icon
                    color="blue darken-3"
                    @click="
                      item.completed = false;
                      item.number.todo = GET_TODO_LIST.length;
                      renumberTasksAfterDelete(item, GET_DONE_LIST);
                      editTask(item);
                    "
                    >mdi-arrow-u-left-top-bold</v-icon
                  >
                  <v-spacer></v-spacer>
                  <v-icon
                    color="red darken-4"
                    @click="deleteTaskFunc(item, GET_DONE_LIST)"
                    >mdi-close</v-icon
                  >
                </div>
              </div>
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  props: ["currentTask", "taskEditDialogShow", "isNewTask"],
  components: {},
  computed: {
    ...mapGetters(["GET_TODO_LIST", "GET_DONE_LIST"]),
  },
  methods: {
    ...mapActions(["updateTodoList", "editTask", "deleteTask"]),
    editTaskOpen: function (task) {
      this.$emit("update:currentTask", task);
      this.$emit("update:taskEditDialogShow", true);
      this.$emit("update:isNewTask", false);
      console.log(this.taskEditDialogShow);
    },
    renumberTasksAfterDelete: function (task, todoList) {
      todoList.forEach((item) => {
        console.log(task);
        if (!item.completed) {
          if (item.number.todo > task.number.todo) {
            item.number.todo -= 1;
            this.editTask(item);
          }
        } else {
          if (item.number.done > task.number.done) {
            item.number.done -= 1;
            this.editTask(item);
          }
        }
      });
    },
    deleteTaskFunc: function (task, todoList) {
      this.renumberTasksAfterDelete(task, todoList);
      this.deleteTask(task.id);
    },
    upTodoTask: function (item) {
      this.GET_TODO_LIST.find(
        (task) => task.number.todo == item.number.todo - 1
      ).number.todo += 1;
      this.GET_TODO_LIST.find((task) => task.id == item.id).number.todo -= 1;
      this.editTask(
        this.GET_TODO_LIST.find((task) => task.number.todo == item.number.todo)
      );
      this.editTask(
        this.GET_TODO_LIST.find(
          (task) => task.number.todo == item.number.todo + 1
        )
      );
    },
    downTodoTask: function (item) {
      this.GET_TODO_LIST.find(
        (task) => task.number.todo == item.number.todo + 1
      ).number.todo -= 1;
      this.GET_TODO_LIST.find((task) => task.id == item.id).number.todo += 1;
      this.editTask(
        this.GET_TODO_LIST.find((task) => task.number.todo == item.number.todo)
      );
      this.editTask(
        this.GET_TODO_LIST.find(
          (task) => task.number.todo == item.number.todo - 1
        )
      );
    },
    upDoneTask: function (item) {
      this.GET_DONE_LIST.find(
        (task) => task.number.done == item.number.done - 1
      ).number.done += 1;
      this.GET_DONE_LIST.find((task) => task.id == item.id).number.done -= 1;
      this.editTask(
        this.GET_DONE_LIST.find((task) => task.number.done == item.number.done)
      );
      this.editTask(
        this.GET_DONE_LIST.find(
          (task) => task.number.done == item.number.done + 1
        )
      );
    },
    downDoneTask: function (item) {
      this.GET_DONE_LIST.find(
        (task) => task.number.done == item.number.done + 1
      ).number.done -= 1;
      this.GET_DONE_LIST.find((task) => task.id == item.id).number.done += 1;
      this.editTask(
        this.GET_DONE_LIST.find((task) => task.number.done == item.number.done)
      );
      this.editTask(
        this.GET_DONE_LIST.find(
          (task) => task.number.done == item.number.done - 1
        )
      );
    },
  },
};
</script>

<style lang="scss">
.main__container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 80px;
  gap: 36px;

  width: 676px;
  height: 423px;
}

.todo__title__text {
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  letter-spacing: -0.0075em;

  color: #667085;
}

.todo__card__title__text {
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;

  letter-spacing: -0.02em;

  color: #1d2939;
}

.todo__card__author__text {
  font-family: "Karla";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: -0.02em;

  color: #98a2b3;
}
.tasks__quantity__text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: -0.0075em;

  /* White */

  color: #ffffff;
}
</style>
