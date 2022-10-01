import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import vuetify from "./plugins/vuetify";

// loads the Icon plugin
UIkit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
