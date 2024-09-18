import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import Details from "./pages/Details.vue";
import Contacts from "./pages/Contacts.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/dettagli/:id",
      name: "dettagli",
      component: Details,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
export { router };
