<template>
  <div class="sidebar ma-0">
    <v-navigation-drawer
      style="height: 100%"
      permanent
      width="320"
      disable-resize-watcher
      floating
    >
      <v-list-item class="pa-0 mb-6">
        <v-list-item-content>
          <v-list-item-title
            ><div class="sidebar__subtitle">
              <div class="rectangle1"></div>
              <span class="sidebar__title__text">Company</span>
            </div></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list dense>
        <v-list-item
          class="px-2 sidebar__item__inactive"
          active-class="sidebar__item__active"
          color="white"
          link
          :to="'/TodoList'"
        >
          <v-list-item-content>
            <v-list-item-title class="d-flex align-center">
              <v-icon class="mr-1" color="#1d2939" size="24"
                >mdi-view-grid-outline</v-icon
              ><span class="sidebar__item__text">Tasks</span>
              <v-spacer></v-spacer>
              <div class="rectangle2 d-flex justify-center align-center">
                <span class="tasks__quantity__text">{{
                  GET_TODO_LIST.length
                }}</span>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="d-flex align-center">
          <button class="sidebar__bottom__button">
            <v-icon>mdi-cog-outline</v-icon><span>Settings</span>
          </button>
          <button class="sidebar__bottom__button" @click="createNewTask()">
            <v-icon>mdi-plus-circle-outline</v-icon><span>New task</span>
          </button>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskModel from "@/models/TaskModel";

export default {
  props: ["currentTask", "taskEditDialogShow", "isNewTask"],
  computed: {
    ...mapGetters(["GET_TODO_LIST"]),
  },
  methods: {
    createNewTask: function () {
      console.log(1111);
      this.$emit("update:currentTask", new TaskModel({ author: "Me" }));
      this.$emit("update:taskEditDialogShow", true);
      this.$emit("update:isNewTask", true);
      console.log(this.isNewTask);
    },
  },
};
</script>

<style lang="scss">
.sidebar {
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
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: -0.03em;

  color: #1d2939;
}

.sidebar__item__active {
  box-sizing: border-box;

  height: 48px;

  background: #f2f4f7;
  border-radius: 8px;
}

.sidebar__item__inactive {
  box-sizing: border-box;

  height: 48px;

  border-radius: 8px;
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

.rectangle2 {
  width: 20px;
  height: 20px;

  background: #1d2939;
  border-radius: 6px;
}

.tasks__quantity__text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.0075em;

  color: #ffffff;
}
</style>
