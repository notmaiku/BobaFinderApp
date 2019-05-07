import Vue from "vue";
import Router from "vue-router";
import Search from "./views/Search.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "search",
      component: Search
    },
    {
      path: "/community",
      name: "community",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Community.vue")
    },
    {
      path:"/profile",
      name: "profile",
      component: () =>
        import("./views/Profile.vue")
    },
    {
      path:"/settings",
      name: "settings",
      component: () =>
        import("./views/Settings.vue")
    },
    {
      path:"/shop",
      name: "shop",
      component: () =>
        import("./views/Shop.vue")
    }
  ]
});
``