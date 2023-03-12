<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        新闻
        <br />
        资讯
      </div>

      <div class="tip2">你需要什么帮助？</div>

      <div class="btns">
        <span @click="onTyeChange(1)"> 聚星风采 </span>
        <span @click="onTyeChange(2)"> 历史成果 </span>
        <span @click="onTyeChange(3)"> 避坑指南 </span>
      </div>
    </section>

    <section class="container">
      <span v-if="type === 1" class="title"> 聚星风采 </span>
      <span v-if="type === 2" class="title"> 历史成果 </span>
      <span v-if="type === 3" class="title"> 避坑指南 </span>
      <div @click="toDetail(7)">聚星团队白皮书</div>
      <div @click="toDetail(6)">聚星团队关于马士基航运项目投资研讨会</div>
      <div @click="toDetail(5)">聚星团队在爱心公益事业的脚步从未停止</div>
      <div @click="toDetail(1)">积极扩大有效投资！</div>
      <div @click="toDetail(2)">
        跟着总书记学习二十大报告丨促进人与自然和谐共生
      </div>
      <div @click="toDetail(3)">
        21条举措力挺民间投资，发改委将推出“绿灯”投资案例
      </div>
      <div @click="toDetail(4)">聚星团队探索碳中和特点及演变</div>
      <p>
        <img src="@/assets/images/juxingkaobei6.png" alt="" />
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",

  data() {
    return {
      type: 1,
    };
  },

  methods: {
    onTyeChange(type) {
      this.type = type;
    },

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
  overflow: hidden;
  .header {
    width: 100%;
    padding: 65px 25px;
    background-color: rgba(241, 242, 243, 1);
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip1 {
      font-size: 42px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #2c2b29;
    }

    .tip2 {
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #22211f;
      margin-top: 37px;
    }

    .btns {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 12px;
      margin-top: 42px;

      span {
        height: 26px;
        background: #0025e8;
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #ffffff;
      }
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px 15px;
    overflow: hidden;

    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #2c2b29;
    }

    div {
      width: 100%;
      height: 69px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(237, 237, 237, 1);
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #2c2b29;
      line-height: 32px;
    }

    p {
      width: 100%;
      padding: 13px;
      margin-top: 24px;
      background-color: rgba(240, 246, 252, 1);
      img {
        width: 100%;
      }
    }
  }
}
</style>
