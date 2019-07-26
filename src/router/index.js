import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "hash",
  linkActiveClass: "active",
  routes: paths
});

// router gards
router.beforeEach((to, from, next) => {
  if (to.meta.breadcrumb) {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    if (authUser) {
      NProgress.start();
      next();
    } else {
      next({ path: "/access/login" });
    }
  } else {
    NProgress.start();
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.public) {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    if (authUser) {
      next({ path: "/dashboard" });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // ...
  NProgress.done();
});

export default router;
