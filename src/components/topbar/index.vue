<template>
  <div class="topbar_root">
    <section class="top">
      <img class="logo" src="@/assets/images/juxingkaobei.png" alt="" />
      <img
        v-if="!isOpen"
        class="more"
        src="@/assets/images/gengduo.png"
        alt=""
        @click="onOpenClick(true)"
      />
      <img
        v-else
        class="more"
        src="@/assets/images/cha.png"
        alt=""
        @click="onOpenClick(false)"
      />
    </section>

    <section class="list" :class="{ none: !isOpen }">
      <span :class="{ active: menu === 'home' }" @click="onItemClick('home')">
        首页
      </span>
      <span
        :class="{ active: menu === 'article' || menu === 'article-detail' }"
        @click="onItemClick('article')"
      >
        文章中心
      </span>
      <span :class="{ active: menu === 'about' }" @click="onItemClick('about')">
        关于我们
      </span>
      <span
        :class="{ active: menu === 'contact' }"
        @click="onItemClick('contact')"
      >
        联系我们
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopbarComponent",

  data() {
    return {
      isOpen: false,
      menu: "home",
    };
  },

  watch: {
    "$route.path": {
      handler() {
        const path = this.$route.path.replace("/", "");
        this.menu = path || "home";
      },
      immediate: true,
    },
  },

  mounted() {},

  methods: {
    onOpenClick(fun) {
      this.isOpen = fun;
    },

    onItemClick(route) {
      this.menu = route;
      this.$router.push({
        path: `/${route}`,
      });
      this.onOpenClick(false);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.topbar_root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  z-index: 3;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 77px;
    background: #ffffff;
    box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.17);
    z-index: 3;
    padding: 0 24px 0 17px;
    pointer-events: auto;
    .logo {
      height: 29px;
    }

    .more {
      height: 15px;
    }
  }

  .list {
    width: 100%;
    height: calc(100vh - 77px);
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    pointer-events: auto;
    transition: height 0.2s;
    display: flex;
    flex-direction: column;

    span {
      width: 100%;
      height: 62px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid rgba(237, 237, 237, 1);
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(29, 29, 29, 0.9);
    }

    .active {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #0e77b9;
    }
  }

  .none {
    height: 0;
  }
}
</style>
