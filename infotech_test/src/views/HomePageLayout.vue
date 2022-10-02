<template>
  <div style="height: 100%">
    <div class="main d-flex justify-center">
      <router-view
        :currentTask.sync="currentTask"
        :taskEditDialogShow.sync="taskEditDialogShow"
        :isNewTask.sync="isNewTask"
      ></router-view>
    </div>
    <TodoSidebar
      :currentTask.sync="currentTask"
      :taskEditDialogShow.sync="taskEditDialogShow"
      :isNewTask.sync="isNewTask"
    />
    <v-dialog v-model="taskEditDialogShow" width="800">
      <v-card>
        <v-card-title>
          <span class="d-block text-h5"
            ><span
              v-if="isNewTask"
              class="sidebar__title__text"
              style="font-size: 24px"
              >Add new task</span
            >
            <span v-else class="sidebar__title__text" style="font-size: 24px"
              >Edit task</span
            >
          </span>
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="currentTask.title"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#1d2939" text @click="taskEditDialogShow = false">
            Cancel
          </v-btn>
          <v-btn
            color="#1d2939"
            text
            @click="
              if (isNewTask) {
                postTask(currentTask);
              } else {
                editTask(currentTask);
              }

              taskEditDialogShow = false;
            "
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TodoSidebar from "@/views/TodoSidebar.vue";
import { mapGetters, mapActions } from "vuex";
import TaskModel from "@/models/TaskModel";
//import TodoListComponent from "@/views/TodoListComponent.vue";
export default {
  data: () => ({
    currentTask: new TaskModel({}),
    taskEditDialogShow: false,
    isNewTask: false,
  }),
  computed: {
    ...mapGetters(["GET_TODO_LIST"]),
  },
  components: { TodoSidebar },
  methods: {
    ...mapActions(["loadTodoList", "postTask", "editTask"]),
    chck: function () {
      console.log(this.currentTask);
    },
  },
  beforeMount() {
    this.loadTodoList();
  },
};
</script>

<style lang="scss">
.main {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 320px;

  background: #f2f4f7;
}

.sidebar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 24px 16px;
  gap: 32px;

  position: absolute;
  height: 100%;
  width: 320px;
  left: 0px;
  top: 0px;

  background: #ffffff;
}

.sidebar__title {
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px;

  border-radius: 8px;
}

.sidebar__subtitle {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 0px;
  gap: 8px;

  width: 100px;
  height: 24px;
}

.rectangle1 {
  width: 24px;
  height: 24px;

  background: #1d2939;
  border-radius: 4px;
}

.sidebar__title__text {
  width: 69px;
  height: 19px;

  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: -0.03em;

  color: #1d2939;
}

.sidebar__item__text {
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.03em;

  color: #1d2939;
}

.sidebar__bottom__button {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 8px 12px 6px;
  gap: 10px;

  width: 132px;
  height: 48px;

  border-radius: 8px;

  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  letter-spacing: -0.03em;

  color: #667085;
}

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

.rectangle2 {
  width: 20px;
  height: 20px;

  /* Gray / 800 */

  background: #1d2939;
  border-radius: 6px;
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
