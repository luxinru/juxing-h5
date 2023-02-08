<template>
  <div class="page_root">
    <img class="header" src="@/assets/images/1kaobei.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "HomePage",

  methods: {
    toDetail(type) {
      this.$router.push({
        path: "/article-detail",
        query: {
          type,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page_root {
  background-color: rgba(240, 246, 252, 1);

  .header {
    width: 100%;
  }
}
</style>
