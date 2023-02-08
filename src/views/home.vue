<template>
  <div class="page_root">
    <img class="header" src="@/assets/images/1kaobei.png" alt="" />

    <section class="article">
      <span class="title"> 绿色投资，把握“零碳” 社会的投资风向标 </span>

      <p>
        双碳”目标对当前中国来说，既是机遇也是挑战，在无形之中为实现“零碳中国”指明了方向。在高质量、可持续的经济发展要求下，为绿色金融的具体实施发出了强烈信号，也为零碳技术的场景运用带来了更多的绿色投资机会。
      </p>
      <p>
        在“双碳”战略下，将带来颠覆性的能源和科技革命，同时也会带动金融体系的转型发展，从而带动社会各行业领域的全新的经济增长点。
      </p>
      <p>
        碳中和目标将“绿色”变成中国长期价值投资的新风向，从而倒逼中国逐渐摆脱传统能源的现状，建立起一个全新的能源、技术和经济体系。其中，电力、建筑和交通作为与人民生活密切相关的板块，也成为未来重要的绿色投资领域。
      </p>

      <div class="img">
        <span class="img_title"> 中国碳中和三步走发展策略 </span>
        <div class="part">
          <span>
            第一阶段
            <br />
            2020-2030年
          </span>
          <span>
            实现碳达峰:
            <br />
            提高能源效率,控制煤炭消费,大规模建设可再生能源推进新能源汽车渗透,引导居民向低碳生活方式转型
          </span>
        </div>

        <img src="@/assets/images/juxing31kaobei2.png" alt="" />

        <div class="part">
          <span>
            第二阶段
            <br />
            2030-2045年
          </span>
          <span>
            快速降低碳排放:
            <br />
            大规模应用可再生能源,实现交通全面电力化,推广碳捕获、利用与封存技术,完成第一产业减排改造。
          </span>
        </div>

        <img src="@/assets/images/juxing31kaobei2.png" alt="" />

        <div class="part">
          <span>
            第三阶段
            <br />
            2045-2060年
          </span>

          <span>
            深度脱碳,实现碳中和:
            <br />
            工业、发电、交通等领域完成清洁能源改造,可再生能源、储能、氢能等相关技术实现商业化利用。
          </span>
        </div>
      </div>

      <span class="title"> 140万亿投向碳中和！ </span>
      <span class="sub_title"> 深度分析碳中和背后 的产业链！ </span>

      <p>
        日前，中国投资协会发布的《零碳中国·绿色投资蓝皮书》中测算
        “碳中和”相关的投资规模约70万亿；清华大学气候变化与可持续发展研究院预测投资规模在127.2-174.4万亿之间；国家发改委价格监测中心研究人员预测“碳中和”新增投资将超过139万亿元。
      </p>
      <p>
        综合各家结果，《零碳中国·绿色投资蓝皮书》中测算的投资过于保守，而清华大学和发改委价格检测中心的测算结果大致相同。因此，碳中和带来的相关投资总额将在140万亿左右。
      </p>
      <p>中国碳中和产业发展历程：</p>
      <p>已正式将“碳中和”理念纳入顶层布局</p>
      <p>
        实现碳达峰、碳中和中长期目标，既是我国积极应对气候变化、推动构建人类命运共同体的责任担当，也是我国贯彻新发展理念、推动高质量发展的必然要求。
      </p>
      <p>
        2015年6月，李克强总理在法国访问期间宣布了我国二氧化碳排放将在2030年左右达到峰值，为未来“碳中和”目标跨出了阶段性的步伐。2020年9月，习近平总书记提出力争于2030年前“碳达峰”，2060年前实现“碳中和”，这是我国首次推出“碳中和”。2021年3月，《2021年政府工作报告》提出扎实做好碳达峰、碳中和各项工作，意味着中国已正式将“碳中和”理念纳入顶层布局。
      </p>

      <img class="buju" src="@/assets/images/houduankaobei.png" alt="" />
    </section>

    <section class="inside_story">
      <span class="title">了解内情</span>
      <span class="sub_title">
        查看我们的基准白皮书、文章和更多资源，帮助您作为投资者保持领先地位
      </span>

      <span class="item" v-for="index in 5" :key="index">
        积极扩大有效投资！
      </span>
    </section>
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
  .header {
    width: 100%;
  }

  .article {
    background-color: rgba(240, 246, 252, 1);
    padding: 27px 15px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 29px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #2c2b29;
      line-height: 32px;
    }

    .sub_title {
      width: 261px;
      font-size: 29px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #0025e8;
      line-height: 32px;
      margin-top: 11px;
    }

    p {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #22211f;
      line-height: 22px;
      margin: 24px 0 0 0;
    }

    .img {
      width: 348px;
      background: #ffffff;
      padding: 0 12px 27px;
      display: flex;
      flex-direction: column;
      margin: 37px 0 52px 0;

      .img_title {
        width: 100%;
        height: 57px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #2c2b29;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .part {
        display: flex;
        align-items: center;

        span {
          height: 93px;
          background: #0025e8;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ffffff;
          padding: 0 6px;

          &:nth-child(1) {
            width: 94px;
            text-align: center;
          }

          &:nth-child(2) {
            flex: 1 0;
            margin-left: 8px;
          }
        }
      }

      img {
        width: 22px;
        height: 42px;
        margin: 9px 0 9px 36px;
      }
    }

    .buju {
      width: 344px;
      margin: 24px auto 0;
    }
  }

  .inside_story {
    background-color: rgba(23, 29, 151, 1);
    padding: 38px 16px;
    display: flex;
    flex-direction: column;
    max-height: 765px;
    overflow-y: auto;

    .title {
      font-size: 29px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }

    .sub_title {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #ffffff;
      margin-top: 27px;
    }

    .item {
      width: 100%;
      height: 91px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #ffffff;
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }
}
</style>
