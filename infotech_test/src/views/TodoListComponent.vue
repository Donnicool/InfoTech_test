<template>
  <div class="main__container">
    <v-row>
      <v-col cols="6" class="pr-8"
        ><div class="mb-8">
          <span class="todo__title__text text-uppercase">To do</span>
        </div>

        <div v-for="item in GET_TODO_LIST" :key="item.id">
          <v-card v-if="!item.completed" elevation="1" class="mb-6"
            ><v-card-title class="todo__card__title__text mb-2">{{
              item.title
            }}</v-card-title
            ><v-card-subtitle class="todo__card__author__text"
              >Created by:
              <span style="font-weight: 700">{{
                item.author
              }}</span></v-card-subtitle
            >
          </v-card>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="mb-8">
          <span class="todo__title__text text-uppercase">Done</span>
        </div>
        <div v-for="item in GET_TODO_LIST" :key="item.id">
          <v-card v-if="item.completed" elevation="1" class="mb-6"
            ><v-card-title class="todo__card__title__text mb-2">{{
              item.title
            }}</v-card-title
            ><v-card-subtitle class="todo__card__author__text"
              >Created by:
              <span style="font-weight: 700">{{
                item.author
              }}</span></v-card-subtitle
            >
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  components: {},
  computed: {
    ...mapGetters(["GET_TODO_LIST"]),
  },
  methods: {
    chck: function () {
      console.log(this.GET_WORKS);
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
