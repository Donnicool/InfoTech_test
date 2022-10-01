import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePageLayout.vue";
import TodoListComponent from "../views/TodoListComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [
      {
        path: "/TodoList",
        name: "TodoList",
        component: TodoListComponent,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
