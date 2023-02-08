import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";
import Contact from "../views/contact.vue";
import Article from "../views/article.vue";
import About from "../views/about.vue";
import ArticleDetail from "../views/article-detail.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/article",
      name: "article",
      component: Article,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/article-detail",
      name: "article-detail",
      component: ArticleDetail,
    },
  ],
});

export default router;
