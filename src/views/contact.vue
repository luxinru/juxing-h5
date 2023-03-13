<template>
  <div class="page_root">
    <section class="tip1">
      联系
      <br />
      我们
    </section>

    <section class="tip2">联系我们，获取最新的产品和解决方案。</section>

    <section class="container">
      <div class="info">
        <span class="title1"> 联系我们 </span>
        <span class="title2"> 联系我们，获取最新的产品和解决方案。 </span>

        <div class="item">
          <img src="@/assets/images/youxiang.png" alt="" />
          <span>juxing@163.com</span>
        </div>

        <div class="item">
          <img src="@/assets/images/zuobiao.png" alt="" />
          <span>香港聚星投資諮詢有限公司</span>
        </div>
      </div>

      <div class="input_container">
        <span class="title"> 给我们留言 </span>

        <div class="input_box">
          <span class="label"> 邮箱 </span>
          <input />
        </div>
        <div class="input_box">
          <span class="label"> 电话 </span>
          <input />
        </div>
        <div class="input_box" style="grid-column: span 2">
          <span class="label"> 主题 </span>
          <input />
        </div>
        <div class="input_box" style="grid-column: span 2">
          <span class="label"> 信息 </span>
          <textarea resize="none"></textarea>
        </div>

        <div class="btn">提交</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style lang="scss" scoped>
.page_root {
  background-color: rgba(241, 242, 243, 1);
  padding-bottom: 24px;

  .tip1 {
    font-size: 42px;
    font-family: PingFang SC;
    font-weight: 300;
    color: #2c2b29;
    margin-top: 64px;
  }

  .tip2 {
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 300;
    color: #22211f;
    margin-top: 37px;
  }

  .container {
    position: relative;
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    margin-top: 61px;
    overflow: hidden;

    .info {
      width: 100%;
      padding: 26px 22px;
      background: #171d97;
      display: flex;
      flex-direction: column;

      .title1 {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }

      .title2 {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-top: 19px;
      }

      .item {
        display: flex;
        align-items: center;
        margin-top: 35px;

        &:last-child {
          margin-top: 22px;

          img {
            width: 16px;
            margin-left: 2.5px;
            margin-right: 22.5px;
          }
        }

        img {
          width: 21px;
          margin-right: 25px;
        }

        span {
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #ffffff;
        }
      }
    }

    .input_container {
      width: 100%;
      padding: 26px 22px;
      background-color: #fff;
      display: flex;
      flex-direction: column;

      .title {
        width: 100%;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #1d1d1d;
        font-weight: bold;
      }

      .input_box {
        width: 100%;
        margin-top: 25px;
        display: flex;
        flex-direction: column;

        &:first-child {
          margin-top: 34px;
        }

        .label {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #1d1d1d;
        }

        input {
          width: 100%;
          height: 46px;
          background: #ffffff;
          border: 1px solid #d3d3d3;
          border-radius: 3px;
          outline: none;
          margin-top: 17px;
        }

        textarea {
          width: 100%;
          height: 142px;
          background: #ffffff;
          border: 1px solid #d3d3d3;
          border-radius: 3px;
          outline: none;
          margin-top: 17px;
        }

        &:last-child {
          .input {
            height: max-content;
          }
        }
      }

      .btn {
        width: 100%;
        height: 46px;
        background: #171d97;
        border: 1px solid #d3d3d3;
        border-radius: 3px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>
