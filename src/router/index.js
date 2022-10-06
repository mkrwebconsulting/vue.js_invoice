import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import InvoiceView from "@/views/InvoiceView";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
    meta: { transition: 'fade' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
