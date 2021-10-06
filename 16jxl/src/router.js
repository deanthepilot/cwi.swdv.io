import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./components/Index";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/Index", component: Index },
  { path: "/About", component: About },
  { path: "/Experience", component: Experience },
  { path: "/Contact", component: Contact }
];

export default new VueRouter({
  mode: "history",
  routes
});
