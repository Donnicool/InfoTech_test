<template>
  <div style="height: 100%">
    <div class="main d-flex justify-center">
      <router-view></router-view>
    </div>
    <TodoSidebar />
  </div>
</template>

<script>
import TodoSidebar from "@/views/TodoSidebar.vue";
//import TodoListComponent from "@/views/TodoListComponent.vue";
export default {
  components: { TodoSidebar },
};
</script>

<style lang="scss">
.main {
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
