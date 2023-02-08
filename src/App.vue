<template>
  <div class="main">
    <Topbar></Topbar>
    <RouterView class="views" />
    <section class="footer">
      <img class="logo" src="@/assets/images/juxinglogokaobei7.png" alt="" />

      <span class="tip1"> 关于我们 </span>
      <span class="tip2">
        正在引领互联网项目投资的新时代，通过为更多人打开更高回报的大门进行投资。我们正在建设世界上
        最积极参与的投资者群体，激发推动世界前进的投资。
      </span>

      <div class="container">
        <div class="part">
          <span class="title"> 投资 </span>

          <p>它是如何工作的</p>
          <p>直接资金</p>
          <p>投资组合基金</p>
          <p>二级市场</p>
          <p>常见问题解答</p>
        </div>
        <div class="part">
          <span class="title"> 学习 </span>

          <p>博客</p>
          <p>网络研讨会</p>
          <p>白皮书</p>
          <p>时事通讯</p>
        </div>

        <div class="part">
          <span class="title"> 公司 </span>

          <p>关于我们</p>
          <p>群组</p>
          <p>领导者</p>
          <p>职业</p>
          <p>联系我们</p>
        </div>
      </div>

      <div class="impotent">
        <span>重要信息</span>

        <p>
          通过本网站或其他方式进行的任何交流都不应被解释为任何安全。互联网项目投资中的另类投资流动性差、投机性强，而且
          涉及高度的风险。过去的表现并不代表未来的结果。
          投资前，仔细考虑各自的基金
          有关潜在风险、费用和开支的详细资料。投资的价值
          可能下降也可能上升。互联网项目投资或投资工具
          不同于在银行机构的存款。投资者获得非流动性和/或受限
          可能受持有期要求和/或流动性问题影响的成员权益。
          不能接受周期性持有投资的投资者不应投资。在这里互联网项目投资最明智的投资策略，互联网项目投资应该只是你整体的一部分
          投资组合。您投资组合中的互联网项目投资部分可能包括不同的平衡投资组合
          互联网项目投资。如需了解更多信息，包括聚星团队的附属机构。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Topbar from "@/components/topbar/index.vue";

export default {
  name: "App",

  components: {
    Topbar,
  },

  data() {
    return {
      menu: "home",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
* {
  flex-shrink: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
}

.page_root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  padding-top: 77px;

  .views {
    width: 100%;
    flex: 1 0;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    .logo {
      height: 96px;
    }

    .tip1 {
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #22211f;
      margin-top: 35px;
    }

    .tip2 {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #22211f;
      line-height: 22px;
      padding: 0 15px;
      margin-top: 27px;
    }

    .container {
      width: 100%;
      padding: 0 15px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 48px;
      margin-top: 40px;

      .part {
        display: flex;
        flex-direction: column;

        p {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 300;
          color: #22211f;
          line-height: 27px;
          margin: 0;
        }

        .title {
          font-size: 17px;
          font-family: PingFang SC;
          font-weight: 600;
          color: #22211f;
          margin-bottom: 26px;
        }
      }
    }

    .impotent {
      width: 100%;
      padding: 28px 15px 33px;
      display: flex;
      flex-direction: column;
      background-color: rgba(23, 29, 151, 1);
      margin-top: 93px;

      span {
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }

      p {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 300;
        color: #ffffff;
        line-height: 27px;
        margin-top: 26px;
      }
    }
  }
}
</style>
