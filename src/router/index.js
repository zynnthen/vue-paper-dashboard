import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { auth } from "@/firebase/firebaseConfig";

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkActiveClass: "active",
});

// Use the onAuthStateChanged observer to check authentication state
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, navigate to the dashboard if currently on login/register
    if (
      router.currentRoute.path === "/login" ||
      router.currentRoute.path === "/register"
    ) {
      router.push("/dashboard");
    }
  } else {
    // User is signed out, navigate to login if not already there
    if (router.currentRoute.meta.requiresAuth) {
      router.push("/login");
    }
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
