<template>
  <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">Default</h3>
    <p>
      Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <a href="#offcanvas-slide" class="uk-button uk-button-default" uk-toggle
      >Open</a
    >

    <div id="offcanvas-slide" uk-offcanvas>
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">
          <li class="uk-active"><a href="#">Active</a></li>
          <li><a href="#">Item</a></li>
          <li class="uk-nav-header">Header</li>
          <li><a href="#">Item</a></li>
          <li class="uk-nav-divider"></li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "HomeView"
  // components: {
  //   HelloWorld
  // }
};
</script>
